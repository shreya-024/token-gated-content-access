//contract_id: CDLLDWLXMY462ICLUCBOBSGYAZFQJCIGZORW4V2X52ULHMUI5XB7PMIT

#![no_std]
use soroban_sdk::{contract, contractimpl, Symbol, Env, Address};

// FIX: Use Symbol::short() to define the const Symbol.
// This is the correct method for the SDK version reporting the error.
const ADMIN_KEY: Symbol = Symbol::short("ADMIN");

#[contract]
pub struct AccessContract;

#[contractimpl]
impl AccessContract {
    pub fn get_admin(env: Env) -> Address {
        env.storage().persistent().get(&ADMIN_KEY).unwrap()
    }

    pub fn initialize(env: Env, admin: Address) {
        // Use .persistent().set()
        env.storage().persistent().set(&ADMIN_KEY, &admin);
    }

    pub fn grant(env: Env, who: Address) {
        // Use .persistent().get()
        let admin: Address = env.storage().persistent().get(&ADMIN_KEY).unwrap();
        
        // Ensure the admin is authorizing the call
        admin.require_auth();
        
        // Use .persistent().set()
        env.storage().persistent().set(&who, &true);
    }

    pub fn revoke(env: Env, who: Address) {
        // Use .persistent().get()
        let admin: Address = env.storage().persistent().get(&ADMIN_KEY).unwrap();
        
        // Ensure the admin is authorizing the call
        admin.require_auth();
        
        // Use .persistent().set()
        env.storage().persistent().set(&who, &false);
    }

    pub fn has_access(env: Env, who: Address) -> bool {
        // Use .persistent().get()
        env.storage().persistent().get(&who).unwrap_or(false)
    }
}