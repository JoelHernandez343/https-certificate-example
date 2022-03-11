# Trying local self-signed certificates for https development

## [`FiloSottile/mkcert`](https://github.com/FiloSottile/mkcert) is magic

[`FiloSottile/mkcert`](https://github.com/FiloSottile/mkcert) is a simple utility to create locally-trusted certificates for development. It allows skip the security warning in the browsers when it is being developed a site / server or something else.

### Installation

Check [the documentation](https://github.com/FiloSottile/mkcert)

### Usage

Check [the documentation](https://github.com/FiloSottile/mkcert) for future changes.

Installation of certificate store (not available for Firefox@Windows):

```
mkcert -install // or sudo mkcert -install
```

In Windows, restart the computer before using the certificates.

Then, in your project create the certificates:

```
mkcert <name_of_certificate>
```

## Usage of this server

This repo is an example of using local custom certificates, in this case, for a simple node server development. The usage for React / Vue / Next.js may be different. Investigating...

```
npm run start
```
