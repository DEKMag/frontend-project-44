install:
  npm ci

# docs:
#   mkdir -p docs
# 	npm run documentation -- build even.js -f md > docs/README.md

brain-games:
  node bin/brain-games.js

publish:
  npm publish --dry-run