// import { decodeProtectedHeader, importJWK, jwtVerify } from "jose";

// let publicKeyPromise: Promise<CryptoKey | Uint8Array> | null = null;

// function getKey() {
// 	if (!publicKeyPromise) {
// 		const jwk = JSON.parse(process.env.JWK!);
// 		publicKeyPromise = importJWK(jwk);
// 	}
// 	return publicKeyPromise;
// }

// export async function verifyJwt(token: string) {
//   const { kid, alg } = decodeProtectedHeader(token)

//   const jwk = getKey()

//   const { payload } = await jwtVerify(token, jwk, {
//     algorithms: [alg],
//   })

//   return payload
// }
import { createRemoteJWKSet, jwtVerify } from 'jose';


const jwksUri = "http://localhost:3000/api/auth/jwks"

const JWKS = createRemoteJWKSet(new URL(jwksUri));

export async function validateJwt(jwt: string) {
  try {
    const { payload, protectedHeader } = await jwtVerify(jwt, JWKS);

    console.log('Token verified successfully.');
    console.log('Payload:', payload);
    console.log('Protected Header:', protectedHeader);
    return payload;

  } catch (error) {
    console.error('Token verification failed:', error);
    throw new Error('Invalid token');
  }
}