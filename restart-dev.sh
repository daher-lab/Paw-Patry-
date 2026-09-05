#!/bin/bash
exec >> /tmp/paw-pawrty-restart.log 2>&1
echo "==== $(date) ===="
lsof -ti :5173 | while read p; do echo "kill $p"; kill -9 "$p"; done
sleep 1
rm -rf "/Users/mohamaddaher/Curs Projects /paw-pawrty/node_modules/.vite"
cd "/Users/mohamaddaher/Curs Projects /paw-pawrty" || exit 1
# mark
echo starting > /tmp/paw-pawrty-verify.txt
npm run dev -- --host 127.0.0.1 --port 5173 >> /tmp/paw-pawrty-dev.log 2>&1 &
echo $! > /tmp/paw-pawrty-dev.pid
sleep 2
curl -sS "http://127.0.0.1:5173/src/pages/HomePage.tsx" | grep -oE 'hero-dog[^"]+|hp-photos|hp-hero-media' | sort -u > /tmp/paw-pawrty-verify.txt
curl -sS -o /dev/null -w "img:%{http_code}\n" "http://127.0.0.1:5173/images/hero-dog-wide.jpg" >> /tmp/paw-pawrty-verify.txt
echo DONE >> /tmp/paw-pawrty-verify.txt
