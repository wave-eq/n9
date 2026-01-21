#!/bin/bash

# Ninethray Technologies - Podman Deployment Script
# This script builds and deploys the website using Podman

set -e

echo "🚀 Starting Ninethray Technologies deployment..."

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Configuration
IMAGE_NAME="ninethray-website"
CONTAINER_NAME="ninethray-website"
PORT=98878

# Check if Podman is installed
if ! command -v podman &> /dev/null; then
    echo -e "${RED}❌ Podman is not installed. Please install Podman first.${NC}"
    exit 1
fi

echo -e "${BLUE}📦 Building Docker image...${NC}"
podman build -t $IMAGE_NAME .

# Stop and remove existing container if it exists
if podman ps -a --format "{{.Names}}" | grep -q "^${CONTAINER_NAME}$"; then
    echo -e "${BLUE}🛑 Stopping existing container...${NC}"
    podman stop $CONTAINER_NAME
    echo -e "${BLUE}🗑️  Removing existing container...${NC}"
    podman rm $CONTAINER_NAME
fi

echo -e "${BLUE}🚢 Starting new container...${NC}"
podman run -d \
  --name $CONTAINER_NAME \
  -p $PORT:$PORT \
  -e NODE_ENV=production \
  -e PORT=$PORT \
  -e HOSTNAME=0.0.0.0 \
  --restart unless-stopped \
  $IMAGE_NAME

# Wait for container to be healthy
echo -e "${BLUE}⏳ Waiting for container to be ready...${NC}"
sleep 5

# Check if container is running
if podman ps --format "{{.Names}}" | grep -q "^${CONTAINER_NAME}$"; then
    echo -e "${GREEN}✅ Deployment successful!${NC}"
    echo -e "${GREEN}🌐 Website is running at: http://localhost:$PORT${NC}"
    echo ""
    echo "Useful commands:"
    echo "  View logs:     podman logs -f $CONTAINER_NAME"
    echo "  Stop:          podman stop $CONTAINER_NAME"
    echo "  Restart:       podman restart $CONTAINER_NAME"
    echo "  Remove:        podman rm -f $CONTAINER_NAME"
else
    echo -e "${RED}❌ Deployment failed. Container is not running.${NC}"
    echo "Check logs with: podman logs $CONTAINER_NAME"
    exit 1
fi
