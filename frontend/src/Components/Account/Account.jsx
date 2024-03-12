import React from "react";

//component for å vise konto. funker ikke
export function Account() {

    return(

        <div>
            {user ? (
                <div>
                    <p>Welcome, {user.fornavn}!</p>
                    <p>Email: {user.epost}</p>
                    <p>UID: {user.id}</p>
                </div>
            ) : (
                <p>Please sign in.</p>
            )}
        </div>
    )
}