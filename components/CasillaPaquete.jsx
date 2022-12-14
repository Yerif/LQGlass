import styles from "./CasillaPaquete.module.scss";
import Link from "next/link";

function CasillaPaquete({
  nombre,
  descripcion,
  precio,
  incluye,
  indicaciones,
  procedimiento,
}) {
  const index = Math.floor(Math.random() * 10);
  return (
    <div className={styles.casillaAnalisis}>
      <div className={styles.imagenCasillaAnalisis}>
        <img
          className={styles.imagenAnalisis}
          src={"/images/medicalIcons/10.png"}
          alt=""
          width={200}
        />
      </div>
      <div className={styles.textosCasilla}>
        <dt>{nombre}</dt>
        {descripcion && (
          <dd>
            <strong>Descripcion:</strong> <br />
            {descripcion}
          </dd>
        )}
        <dd>
          <strong>Incluye: </strong>
          <ul>
            {incluye?.map((el) => (
              <Link href={"/examenes/" + el}>
                <li className={styles.incluyeEl}>{el}</li>
              </Link>
            ))}
          </ul>
        </dd>
        <dd>
          <strong>Indicaciones: </strong> <br />
          {indicaciones}
        </dd>
        <dd>
          <strong>Procedimiento: </strong> <br />
          {procedimiento}
        </dd>
      </div>
      <div className={styles.precios}>
        Precio: <br /> ${precio}
      </div>
    </div>
  );
}

export default CasillaPaquete;
