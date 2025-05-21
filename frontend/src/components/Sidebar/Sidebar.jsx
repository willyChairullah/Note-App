const Sidebar = ({ onCategoryChange }) => {
  return (
    <>
      <div className="flex items-center justify-center mb-8 pb-4 border-b">
        {/* <!-- App Logo and Name --> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="text-blue-500"
        >
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
          <path d="M9 12.5H15"></path>
          <path d="M12 8.5H15"></path>
        </svg>
        <h1 className="text-xl font-bold ml-2">NoteApp</h1>
      </div>

      <div className="mb-6">
        <h2 className="text-md font-semibold mb-3 text-gray-600 uppercase text-sm">
          Menu
        </h2>
        <nav>
          <ul id="sidebar-menu">
            <li className="mb-2">
              <a
                href="#"
                className="sidebar-item flex items-center p-2 hover:bg-gray-200 rounded"
                data-category="all-notes"
                onClick={() => onCategoryChange("cat-001")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-notebook mr-2"
                >
                  <path d="M2 6h4"></path>
                  <path d="M2 10h4"></path>
                  <path d="M2 14h4"></path>
                  <path d="M2 18h4"></path>
                  <rect x="8" y="2" width="16" height="20" rx="2"></rect>
                </svg>
                Semua Catatan
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="sidebar-item flex items-center p-2 hover:bg-gray-200 rounded"
                data-category="important"
                onClick={() => onCategoryChange("cat-002")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-star mr-2"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                Catatan Penting
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="sidebar-item flex items-center p-2 hover:bg-gray-200 rounded"
                data-category="archive"
                onClick={() => onCategoryChange("cat-003")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="lucide lucide-archive mr-2"
                >
                  <rect x="2" y="3" width="20" height="5" rx="1"></rect>
                  <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"></path>
                  <path d="M10 12h4"></path>
                </svg>
                Arsip
              </a>
            </li>

            {/* <!-- Added Nested Categories/Folders --> */}
            {/* <li className="mb-2">
                            <div className="flex items-center justify-between p-2 hover:bg-gray-200 rounded cursor-pointer">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-2">
                                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                                    </svg>
                                    <span>Kuliah</span>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="category-toggle">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </div>
                            <ul className="nested-category">
                                <li className="mb-1">
                                    <a href="#" className="sidebar-item flex items-center p-2 hover:bg-gray-200 rounded" data-category="kuliah-web">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-2">
                                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                            <polyline points="14 2 14 8 20 8"></polyline>
                                        </svg>
                                        Pemrograman Web
                                    </a>
                                </li>
                                <li className="mb-1">
                                    <a href="#" className="sidebar-item flex items-center p-2 hover:bg-gray-200 rounded" data-category="kuliah-mobile">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-2">
                                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                            <polyline points="14 2 14 8 20 8"></polyline>
                                        </svg>
                                        Aplikasi Mobile
                                    </a>
                                </li>
                            </ul>
                        </li>
                        
                        <li className="mb-2">
                            <div className="flex items-center justify-between p-2 hover:bg-gray-200 rounded cursor-pointer">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-2">
                                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                                    </svg>
                                    <span>Proyek</span>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="category-toggle">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </div>
                            <ul className="nested-category">
                                <li className="mb-1">
                                    <a href="#" className="sidebar-item flex items-center p-2 hover:bg-gray-200 rounded" data-category="proyek-web">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-2">
                                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                            <polyline points="14 2 14 8 20 8"></polyline>
                                        </svg>
                                        Website Portofolio
                                    </a>
                                </li>
                            </ul>
                        </li> */}
          </ul>
        </nav>
      </div>

      {/* <!-- Spacer to push user account to bottom --> */}
      <div className="flex-grow"></div>

      {/* <!-- User Account Section --> */}
      <div className="mt-4 pt-4 border-t">
        <div className="flex items-center mb-3">
          <img
            src="https://ui-avatars.com/api/?name=John+Doe&background=random"
            alt="User Avatar"
            className="w-8 h-8 rounded-full mr-2"
          />
          <div>
            <p className="font-medium text-sm">John Doe</p>
            <p className="text-xs text-gray-500">john.doe@example.com</p>
          </div>
        </div>

        {/* <!-- Settings Menu --> */}
        <a
          href="#"
          className="flex items-center p-2 hover:bg-gray-200 rounded text-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            // stroke-width="2"
            // stroke-linecap="round"
            // stroke-linejoin="round"
            className="mr-2"
          >
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          Pengaturan
        </a>
        <a
          href="#"
          className="flex items-center p-2 hover:bg-gray-200 rounded text-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            // stroke-width="2"
            // stroke-linecap="round"
            // stroke-linejoin="round"
            className="mr-2"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            <polyline points="16 17 21 12 16 7"></polyline>
            <line x1="21" y1="12" x2="9" y2="12"></line>
          </svg>
          Keluar
        </a>
      </div>
    </>
  );
};

export default Sidebar;
