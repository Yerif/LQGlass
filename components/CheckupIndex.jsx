import styles from "./CategoryIndex.module.scss";
import TarjetaDescriptivaPaquetes from "./TarjetaDescriptivaPaquetes";
import TituloDivisor from "./TituloDivisor";

const CheckupIndex = ({ contenido }) => {
  //function for the creation of the description blocks for the category section
  const renderTarjetas = paquetes => {
    return paquetes.map((paquete, index) => (
      <TarjetaDescriptivaPaquetes
        key={index}
        image={"./images/medicalImages/" + paquete + ".jpg"}
        nombreCategoria={paquete ? paquete : "Cargando"}
        descripcion={paquete ? paquete : "Cargando"}
      />
    ));
  };
  return (
    <section id="paquetes" className={styles.checkupIndex}>
      <TituloDivisor titulo="Estudios clinicos para cuidar tu salud." />
      <div className={styles.gridTarjetas}>{renderTarjetas(contenido)}</div>
    </section>
  );
};

export default CheckupIndex;
