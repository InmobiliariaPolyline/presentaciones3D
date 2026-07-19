function renderSheetIndex(containerId, proyectos, prefix) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = proyectos.map((p, index) => {
    const hasVisores = p.visores3D && p.visores3D.length > 0;

    return `
      <article class="sheet-card">
        <div class="thumb">
          <span class="code-badge">${p.codigo}</span>
          <img 
            src="${p.imagenes[0]}" 
            alt="Vista previa de ${p.nombre}"
            loading="lazy"
          />
        </div>

        <div class="body">
          <h3>${p.nombre}</h3>

          <!-- METADATOS MEJORADOS CON ICONOS -->
          <div class="project-meta">
            <div class="meta-item">
              <i class="fas fa-location-dot"></i>
              <span>${p.ubicacion}</span>
            </div>
            <div class="meta-item">
              <i class="fas fa-cube"></i>
              <span>${p.software}</span>
            </div>
          </div>

          <p class="desc">
            ${p.descripcion}
          </p>

          <div class="actions">

            <!-- Botón Ver imágenes -->
            <button
              class="btn btn-ghost"
              type="button"
              onclick="openLightbox('${prefix}', ${index})">
              <i class="fas fa-images"></i> Ver imágenes
            </button>

            <!-- Dropdown de modelo 3D -->
            ${hasVisores ? `
              <div class="viewer-dropdown">
                <button
                  class="btn btn-solid viewer-toggle"
                  type="button"
                  onclick="toggleDropdown(this)">
                  <i class="fas fa-cube"></i> Explorar modelo 3D 
                  <i class="fas fa-chevron-down dropdown-icon"></i>
                </button>

                <div class="viewer-menu">
                  ${p.visores3D.map(viewer => `
                    <a 
                      href="${viewer.url}" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      class="viewer-link"
                    >
                      <i class="fas fa-external-link-alt"></i>
                      ${viewer.nombre}
                    </a>
                  `).join("")}
                </div>
              </div>
            ` : `
              <button
                class="btn btn-solid"
                type="button"
                disabled
                style="opacity:0.4; cursor:not-allowed;"
              >
                <i class="fas fa-cube"></i> Sin modelo 3D
              </button>
            `}

          </div>
        </div>
      </article>
    `;
  }).join("");

  // Inicializar todos los dropdowns como cerrados
  document.querySelectorAll('.viewer-menu').forEach(menu => {
    menu.style.display = 'none';
  });
}

/* ============================================================
   DROPDOWN - Abrir y Cerrar
   ============================================================ */
function toggleDropdown(button) {
  // Obtener el contenedor del dropdown
  const dropdown = button.closest('.viewer-dropdown');
  if (!dropdown) return;

  // Obtener el menú
  const menu = dropdown.querySelector('.viewer-menu');
  if (!menu) return;

  // Obtener el icono de la flecha
  const icon = button.querySelector('.dropdown-icon');

  // Verificar si el menú está abierto
  const isOpen = menu.style.display === 'block';

  // Cerrar cualquier otro dropdown abierto
  document.querySelectorAll('.viewer-menu').forEach(otherMenu => {
    if (otherMenu !== menu) {
      otherMenu.style.display = 'none';
      const otherToggle = otherMenu.closest('.viewer-dropdown').querySelector('.viewer-toggle');
      if (otherToggle) {
        otherToggle.classList.remove('active');
        const otherIcon = otherToggle.querySelector('.dropdown-icon');
        if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
      }
    }
  });

  // Alternar el estado del menú actual
  if (isOpen) {
    menu.style.display = 'none';
    button.classList.remove('active');
    if (icon) icon.style.transform = 'rotate(0deg)';
  } else {
    menu.style.display = 'block';
    button.classList.add('active');
    if (icon) icon.style.transform = 'rotate(180deg)';
  }
}

// Cerrar dropdown al hacer clic fuera
document.addEventListener('click', function(e) {
  // Verificar si el clic fue fuera de cualquier dropdown
  const dropdowns = document.querySelectorAll('.viewer-dropdown');
  dropdowns.forEach(dropdown => {
    if (!dropdown.contains(e.target)) {
      const menu = dropdown.querySelector('.viewer-menu');
      const toggle = dropdown.querySelector('.viewer-toggle');
      const icon = toggle ? toggle.querySelector('.dropdown-icon') : null;
      
      if (menu && menu.style.display === 'block') {
        menu.style.display = 'none';
        if (toggle) toggle.classList.remove('active');
        if (icon) icon.style.transform = 'rotate(0deg)';
      }
    }
  });
});

/* ============================================================
   LIGHTBOX - Galería de imágenes
   ============================================================ */
let lightboxState = { proyectos: [], projectIndex: 0, imageIndex: 0 };

function openLightbox(prefix, projectIndex) {
  const proyectos = prefix === "arquitectura" ? proyectosArquitectura : proyectosEstructuras;
  lightboxState = { proyectos, projectIndex, imageIndex: 0 };
  updateLightbox();
  document.getElementById("lightbox").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("open");
  document.body.style.overflow = "";
}

function stepLightbox(delta) {
  const total = lightboxState.proyectos[lightboxState.projectIndex].imagenes.length;
  lightboxState.imageIndex = (lightboxState.imageIndex + delta + total) % total;
  updateLightbox();
}

function updateLightbox() {
  const proyecto = lightboxState.proyectos[lightboxState.projectIndex];
  const img = proyecto.imagenes[lightboxState.imageIndex];
  document.getElementById("lightbox-title").textContent = `${proyecto.codigo} — ${proyecto.nombre}`;
  document.getElementById("lightbox-img").src = img;
  document.getElementById("lightbox-img").alt = `${proyecto.nombre} — imagen ${lightboxState.imageIndex + 1}`;
  document.getElementById("lightbox-counter").textContent =
    `Imagen ${lightboxState.imageIndex + 1} de ${proyecto.imagenes.length}`;
}

// Cerrar lightbox con teclas
document.addEventListener("keydown", (e) => {
  const lb = document.getElementById("lightbox");
  if (!lb || !lb.classList.contains("open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowRight") stepLightbox(1);
  if (e.key === "ArrowLeft") stepLightbox(-1);
});