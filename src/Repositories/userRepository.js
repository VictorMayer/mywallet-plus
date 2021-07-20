import connection from "../database.js";

export async function validateExistingEmail(email){
    const user = await connection.query(
        `SELECT * FROM "users" WHERE "email"=$1`,
        [email]
    );
    if (user.rows[0]) {
        return true;
    }
    return false;
}

export async function create(name, email, hashedPassword){
    await connection.query(
        `INSERT INTO "users" ("name", "email", "password") VALUES ($1, $2, $3)`,
        [name, email, hashedPassword]
    );
}