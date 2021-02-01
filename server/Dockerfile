FROM hayd/deno:1.5.2

# expose port
EXPOSE 3001

# set working dir
WORKDIR /app

# prefer not to run as root
USER deno

# these steps will be re-run upon each file change in your working directory:
ADD /server .

# These are passed as deno arguments when run with docker:
CMD ["run", "--allow-net", "src/main.ts"]