import authBlogCover from '../assets/auth_blog_cover.jpg';
import techBlogCover from '../assets/tech_blog_cover.jpg';

export const blogs = [
  {
    id: 1,
    title: "Beyond Passwords: Exploring Authentication on the Internet",
    author: "Shristi Singh",
    role: "1st year CS Hons",
    date: "February 25, 2026",
    image: authBlogCover,
    excerpt: "Passwords were introduced in the 1960s, when computers were shared by a small number of trusted users. Today, they protect billions of digital identities, but are they still enough?",
    content: `
Passwords were introduced in the 1960s, when computers were shared by a small number of trusted users. A password stopped one user from opening another user’s files. There was no internet, no automation, and no real attacker model.

Today, passwords protect email accounts, bank systems, cloud platforms and digital identities of billions of people. And while the internet changed completely, that design stayed almost unchanged.

This mismatch is the root cause of most authentication failures today.

A secure password is supposed to be: long, random and unique for every service.
It should never be reused or written down.
Humans cannot do this reliably. As a result, people reuse passwords, slightly modify them, or choose predictable ones. Attackers know this very well, so they use it to breach password protection.

Passwords are shared between the user and the server. So, even when servers store hashed passwords instead of plain text, the risk of breach still remains: databases get breached, hashes get stolen and offline brute-force attacks become possible
This is what happened with LinkedIn in 2012 when over 100 million password hashes were leaked. 
Strong hashing algorithms like bcrypt and Argon2 slow this down, but they do not remove the risk. Once hashes are stolen, attackers can work on them without limits.

### Phishing: Exploiting loopholes

* An attacker sends a link that looks like: “accounts-gmail-security[.]com”
* The page looks identical to the real login page.
* A user enters their email and password.
* An attacker collects it and immediately logs into the actual website.

### 2FA: 2 Factor Authentication 

You might have used one of these at some point when logging in to a service:
* SMS-based codes sent to a phone number
* Authenticator apps using Time-based One-Time Passwords (TOTP)
* Push notifications asking the user to approve a login

So, even if an attacker gets the password, they still need one more factor to log in. In most systems, this second factor is something the user has. But it has exploitable loopholes too.

Example: SIM Swap Attacks
* Collects personal information about the victim
* Calls the mobile provider pretending to be the victim
* Transfers the phone number to a new SIM
* Result: all SMS codes go to the attacker

### Push Authentication and Approval Fatigue

Push-based authentication asks users to approve a login instead of entering a code.
Example: Push Bombing
* An attacker has the victim’s password
* Sends repeated login attempts
* The victim receives many push notifications
* Out of annoyance or confusion, the user taps “Approve”
* Once approved, the attacker is in.

Passwords present with many weaknesses:
* They rely on shared secrets
* They assume constant user attention
* Secrets can be transmitted
* Credentials can be replayed
* Phishing is always possible

### Passkeys: A Different Approach

Unlike passwords, passkeys are built using public-key cryptography, standardized through FIDO2 and WebAuthn. They may use a text or a biometric such as a person's fingerprint or face ID. 

**How Passkeys Work:**

* A public-private key pair is generated on the user’s device
* The private key never leaves the device
* The server stores only the public key
* Login uses a cryptographic challenge-response
* The private key is unlocked using biometrics or a device PIN

There is no shared secret to steal. It stops common phishing attacks because:
* The crypto key is bound to the real domain.
* The browser will not respond to the wrong origin.

Though Passkeys solve many of the problems caused by passwords, they are not perfect. In case of loss of devices, recovery of an account can be difficult. 

### The Future of Authentication

We know current systems are prone to problems:
* Shared secrets are prone to phishing 
* Humans cannot manage random passwords efficiently.
* Authentication should not be transferable
* Security should work without constant user effort

Passwords solved an old problem very well. But they are no longer the right tool for today’s internet. Therefore, it's high time we explore other authentication options and switch to them. 
    `
  },
  {
    id: 2,
    title: "Coming Soon: The Next Big Thing in Tech",
    author: "GDG ANDC Team",
    role: "Community",
    date: "TBA",
    image: techBlogCover,
    excerpt: "Stay tuned for our next blog post where we explore the latest trends in technology and innovation.",
    content: `
# Coming Soon

We are working on something exciting! Stay tuned for more updates on the latest in technology, development, and community events.

In the meantime, check out our [events page](/events) to see what we have planned for the future.
    `
  }
];
