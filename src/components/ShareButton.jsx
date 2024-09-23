
const ShareButton = () => {
  const sharePage = () => {
    if (navigator.share) {
      navigator.share({
        title: "Mi Página de Contacto",
        url: window.location.href,
      })
        .then(() => console.log("Página compartida con éxito!"))
        .catch((error) => console.error("Error al compartir:", error));
    } else {
      alert("Copiado el enlace: " + window.location.href);
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="absolute top-4 right-4">
      <button
        onClick={sharePage}
        className="flex items-center bg-blue-500 text-white px-3 py-2 rounded shadow hover:bg-blue-600"
      >
        <i className="fas fa-share-alt mr-2"></i>
        Compartir
      </button>
    </div>
  );
};

export default ShareButton;
