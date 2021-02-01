# use Deno docker image
FROM hayd/deno:1.5.2

# expose port for API
EXPOSE 3001

# prefer not to run as root
USER deno

# these steps will be re-run upon each file change in your working directory:
ADD . /app

# these are passed as deno arguments when run with docker
CMD ["run", "--allow-net", "src/main.ts"]