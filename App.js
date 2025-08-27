import React from "react";
// Bootstrap CSS-t index.js vagy App.js-ben egyszer érdemes importálni
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"; // Saját stílusok pl.

const FeladatNeveirdat = () => {
  return (
    <>
      {/* 1. feladat: doctype - React nem használja */}
      {/* 2. feladat: lang="hu" - React nem kezeli a <html> taget, ezt az index.html-ben állítjuk */}

      {/* Fejléchez szükséges meta és link elemek az index.html-ben legyenek, itt csak a tartalom */}
      <div id="container"></div>
    </>
  );
};

export default FeladatNeveirdat;

// minden zöldet törlöj majd ki !!!!
