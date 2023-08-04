import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'pipe1234',
  database: 'individual2',
  port: 5432,
});

async function transferirSaldo(emailOrigen, emailDestino, monto) {
  const client = await pool.connect();

  try {
    await client.query('BEGIN');

    const descontar = 'UPDATE usuarios SET saldo = saldo - $1 WHERE email = $2 RETURNING *';
    const descuento = await client.query(descontar, [monto, emailOrigen]);

    if (descuento.rows[0].saldo < 0) {
      throw new Error('Saldo insuficiente para realizar la transferencia');
    }

    const acreditar = 'UPDATE usuarios SET saldo = saldo + $1 WHERE email = $2 RETURNING *';
    const acreditacion = await client.query(acreditar, [monto, emailDestino]);

    console.log("Descuento realizado con éxito: ", descuento.rows[0]);
    console.log("Acreditación realizada con éxito: ", acreditacion.rows[0]);

    await client.query('COMMIT');
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('Error realizando la transferencia: ', error);
  } finally {
    client.release();
  }
}

transferirSaldo('primera@gmail.com', 'segunda@gmail.com', 10000)
  .then(() => pool.end())
  .catch(error => console.error('Error en la aplicación', error));
