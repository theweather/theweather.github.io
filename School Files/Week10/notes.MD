# Week 10 Notes

## Agile
### [Manifesto] (https://agilemanifesto.org/principles.html)


## Cybersecurity and Recursion

### PKI: public key infrastructure (PKI) is a common way of managing encryption.

## Encryption, Kerberos, and PKI & PKI Keys

### Authentication: Who are you?
### Authorization: What are you allowed to access?
### Symmetric Encription and Notation:
### Example:
> Key = 12345
> Key {Hello World} --> c935af
> Key {c935af} --> Hello World
### Having an authentication service cuts down on avenues of vulnerability by having a service trusted by services that authenticates users instead of having each service authenticate users themselves. Likewise, using an SSO (single sign on) makes it so users don't have to keep entering their password for each service in a suite of services they must access.
### Assumptions:
- Network is not trusted to be secure.
- Attackers can see all messages and copy/reply any message.
- SSO so users don't have to keep entering password.
- Password never stored on client machine.
- Password never passed in cleartext on network.
### Shared secret idea:
- User and Kerberos share a secret
- Secret used to encrypt messages
- Kerberos knows a message is from Alice if her secret decrypts the message.
- Alice knows message is legit if her secret decrypts it
- Encrypted messages can be "copied" by attacked by not decrypted

### Diffie-Hellman Key Exchange was one of the first public-key protocols. [Diffie-Hellman] (https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange)

### Single sign-on systems can work with Kerberos building a Ticket-Granting-Ticket that is encrypted using Alice's secret key that the client can then decrypt using Alice's key.

### For additional security, Kerberos creates a sessionKey to prevent someone being able to fake Alice's credentials, TGT, key, etc. 

### The system is designed such that every message has to prove who it's from.

### A file can be signed with a private key and verified that it came from a particular person with their public key.

## Recursion
