#!/bin/bash

# Ninethray Technologies - Stop Script
# This script stops and removes the running container

set -e

CONTAINER_NAME="ninethray-website"

echo "🛑 Stopping Ninethray Technologies website..."

if podman ps -a --format "{{.Names}}" | grep -q "^${CONTAINER_NAME}$"; then
    podman stop $CONTAINER_NAME
    podman rm $CONTAINER_NAME
    echo "✅ Container stopped and removed successfully."
else
    echo "ℹ️  No running container found."
fi
