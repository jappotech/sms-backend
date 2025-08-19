#!/usr/bin/env sh
set -e

# Optional: show runtime info
node -v

# Run Prisma generate (in case runtime env differs)
echo "Prisma generate..."
node ./node_modules/.bin/prisma generate || true

# Run migrations with basic retry until DB is ready
echo "Prisma migrate deploy..."
ATTEMPTS=0
until node ./node_modules/.bin/prisma migrate deploy; do
  ATTEMPTS=$((ATTEMPTS+1))
  if [ "$ATTEMPTS" -ge 20 ]; then
    echo "Prisma migrate deploy failed after $ATTEMPTS attempts"
    exit 1
  fi
  echo "Database not ready yet. Retrying in 3s... ($ATTEMPTS)"
  sleep 3
done

echo "Starting app: $@"
exec "$@"
