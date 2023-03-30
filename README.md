# Notes
- [X] handle all routing
- [X] add user registration
- [X] add google signup
- [X] add forgot password
# Testing
## Client account
```
email: user@gmail.com
password: password
```
## Admin account
```
email: admin@gmail.com
password: password
```
### Firestore rules
```
rules_version = '2';
service cloud.firestore {
    match /users/{user} {
    	allow read;
    	allow create;
    	allow update: if request.auth.uid == user
    }
  }
}
```
### Storage rules
```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read;
      allow write: if
      request.auth != null &&
      request.resource.size < 2 * 1024 * 1024 && //2MB
      request.resource.contentType.matches('image/.*')
    }
  }
}
```
