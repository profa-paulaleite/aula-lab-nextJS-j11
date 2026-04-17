async function getUsuario() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/2");
    return res.json();
}

export default async function Usuario() {
    const usuario = await getUsuario();

    return(
        <section>
            <h1> Usuário: {usuario.name} </h1>
            <p> Email: {usuario.email} </p>
            <p> Cidade: {usuario.address.city} </p>
        </section>
    );
}