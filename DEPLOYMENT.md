# Deployment Guide - Ninethray Technologies Website

This guide covers deploying the Ninethray Technologies website using Podman containers.

## Prerequisites

- **Podman** installed on your system
- **Node.js 18+** (for local development)
- At least **2GB RAM** available
- Port **98878** available

## Quick Start with Podman

### Option 1: Using Deployment Script (Recommended)

```bash
# Make the script executable
chmod +x deploy.sh

# Run the deployment
./deploy.sh
```

The website will be available at: **http://localhost:98878**

### Option 2: Manual Podman Commands

```bash
# Build the image
podman build -t ninethray-website .

# Run the container
podman run -d \
  --name ninethray-website \
  -p 98878:98878 \
  -e NODE_ENV=production \
  -e PORT=98878 \
  -e HOSTNAME=0.0.0.0 \
  --restart unless-stopped \
  ninethray-website
```

### Option 3: Using Podman Compose

```bash
# Install podman-compose if not already installed
pip3 install podman-compose

# Start the service
podman-compose up -d

# View logs
podman-compose logs -f

# Stop the service
podman-compose down
```

## Container Management

### View Logs

```bash
# Follow logs in real-time
podman logs -f ninethray-website

# View last 100 lines
podman logs --tail 100 ninethray-website
```

### Stop Container

```bash
# Using the stop script
./stop.sh

# Or manually
podman stop ninethray-website
podman rm ninethray-website
```

### Restart Container

```bash
podman restart ninethray-website
```

### Check Container Status

```bash
# List running containers
podman ps

# Check container details
podman inspect ninethray-website

# Check resource usage
podman stats ninethray-website
```

## Environment Variables

You can customize the deployment with environment variables:

```bash
podman run -d \
  --name ninethray-website \
  -p 98878:98878 \
  -e NODE_ENV=production \
  -e PORT=98878 \
  -e HOSTNAME=0.0.0.0 \
  -e NEXT_PUBLIC_SITE_URL=https://ninethray.com \
  ninethray-website
```

## Port Configuration

The default port is **98878**. To change it:

1. **Edit `podman-compose.yml`**:
   ```yaml
   ports:
     - "YOUR_PORT:98878"
   ```

2. **Or pass it when running**:
   ```bash
   podman run -d -p YOUR_PORT:98878 ninethray-website
   ```

## Production Deployment

### 1. Build Optimized Image

```bash
podman build --no-cache -t ninethray-website:latest .
```

### 2. Tag for Registry (Optional)

```bash
podman tag ninethray-website:latest registry.example.com/ninethray-website:latest
podman push registry.example.com/ninethray-website:latest
```

### 3. Run with Production Settings

```bash
podman run -d \
  --name ninethray-website \
  -p 98878:98878 \
  -e NODE_ENV=production \
  -e PORT=98878 \
  --memory="1g" \
  --cpus="1.0" \
  --restart always \
  ninethray-website:latest
```

### 4. Set Up as Systemd Service

Create `/etc/systemd/system/ninethray-website.service`:

```ini
[Unit]
Description=Ninethray Technologies Website
After=network.target

[Service]
Type=simple
ExecStart=/usr/bin/podman start -a ninethray-website
ExecStop=/usr/bin/podman stop -t 10 ninethray-website
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
```

Enable and start:

```bash
sudo systemctl daemon-reload
sudo systemctl enable ninethray-website
sudo systemctl start ninethray-website
```

## Reverse Proxy Setup

### Nginx Configuration

```nginx
server {
    listen 80;
    server_name ninethray.com www.ninethray.com;

    location / {
        proxy_pass http://localhost:98878;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### Caddy Configuration

```
ninethray.com {
    reverse_proxy localhost:98878
}
```

## Troubleshooting

### Container Won't Start

```bash
# Check logs
podman logs ninethray-website

# Check if port is in use
lsof -i :98878

# Remove and rebuild
podman rm -f ninethray-website
podman rmi ninethray-website
./deploy.sh
```

### Out of Memory

```bash
# Increase memory limit
podman run -d --memory="2g" ...
```

### Permission Issues

```bash
# Run with proper SELinux context
podman run -d --security-opt label=disable ...
```

### Build Failures

```bash
# Clear build cache
podman system prune -a

# Rebuild without cache
podman build --no-cache -t ninethray-website .
```

## Health Checks

The container includes a health check that runs every 30 seconds:

```bash
# Check health status
podman inspect --format='{{.State.Health.Status}}' ninethray-website

# View health check logs
podman inspect --format='{{json .State.Health}}' ninethray-website | jq
```

## Backup and Restore

### Backup Container Image

```bash
podman save ninethray-website:latest | gzip > ninethray-website-backup.tar.gz
```

### Restore Container Image

```bash
gunzip -c ninethray-website-backup.tar.gz | podman load
```

## Monitoring

### Resource Usage

```bash
# Real-time stats
podman stats ninethray-website

# One-time stats
podman stats --no-stream ninethray-website
```

### Container Events

```bash
podman events --filter container=ninethray-website
```

## Security Best Practices

1. **Run as non-root user** (already configured in Dockerfile)
2. **Use read-only root filesystem** (optional):
   ```bash
   podman run -d --read-only ninethray-website
   ```
3. **Limit resources**:
   ```bash
   podman run -d --memory="1g" --cpus="1.0" ninethray-website
   ```
4. **Keep base image updated**:
   ```bash
   podman pull node:18-alpine
   podman build --no-cache -t ninethray-website .
   ```

## Performance Optimization

### Enable HTTP/2

Use a reverse proxy (Nginx/Caddy) with HTTP/2 support.

### Enable Compression

The Next.js application handles compression automatically.

### CDN Integration

For production, consider using a CDN for static assets:
- Cloudflare
- AWS CloudFront
- Fastly

## Support

For deployment issues:
1. Check container logs: `podman logs ninethray-website`
2. Verify port availability: `lsof -i :98878`
3. Check system resources: `podman stats`
4. Review this documentation

## Additional Resources

- [Podman Documentation](https://docs.podman.io/)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Container Best Practices](https://docs.docker.com/develop/dev-best-practices/)
