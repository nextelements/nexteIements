import './../globals.css'

export default function DocumentLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        <div className="grid grid-rows-[auto_1fr_auto] w-screen gap-[1em]">
          <div className="header p-[.75em_0] sticky top-0 z-10 bg-background/75 backdrop-blur-sm border-b border-b-divider">
            <div className="m-[0_auto] w-[85vw]">
              <div className="grid grid-cols-[300px_1fr_300px]">
                <div className="font-semibold">
                  Documentation
                </div>
                <div className="w-full"></div>
                <div className="flex flex-row flex-nowrap justify-end">
                  <div>Suche</div>
                  <div>Github</div>
                </div>
              </div>
            </div>
          </div>
          { children }
          <div className="p-5">
            <div className="m-[0_auto] w-[85vw]">
              Footer
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
