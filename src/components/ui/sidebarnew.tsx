// src/components/ui/sidebar.tsx
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

  import {homepage} from '../../data/data'
  import { thailand } from '../../data/thailand/thailand';
  
  import { bangkok } from '../../data/thailand/bangkok';

  import { instagram } from '../../data/socialmedia/instagram';

  

export function SidebarNew({setData}) {

    return (
    <>
        <div className="fixed top-0 z-10 flex w-full flex-col border-b border-gray-800 bg-black lg:bottom-0 lg:z-auto lg:w-52 lg:border-b-0 lg:border-r lg:border-gray-800">
            <div className="flex h-14 items-center px-4 py-4 lg:h-auto">
                <a className="group flex w-full items-center gap-x-2.5" onClick={() => setData(homepage)}>
                    <div className="h-7 w-7 rounded-full border border-white/30 group-hover:border-white/50">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-6 w-6"><rect width="256" height="256" fill="none"></rect><line x1="208" y1="128" x2="128" y2="208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line>
                            <line x1="192" y1="40" x2="40" y2="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line>
                        </svg>
                    </div>
                        <h3 className="font-semibold tracking-wide text-gray-400 group-hover:text-gray-50">NomadLinks</h3>
                </a>
            </div>

            <button type="button" className="group absolute right-0 top-0 flex h-14 items-center gap-x-2 px-4 lg:hidden">
                <div className="font-medium text-gray-100 group-hover:text-gray-400">Menu</div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="block w-6 text-gray-400"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                </svg>
            </button><div className="overflow-y-auto lg:static lg:block hidden">
            
            <nav className="space-y-6 px-2 pb-24 pt-5">
                <div>
                    <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400/80">
                        <div>Categories</div>
                    </div>
                    <div className="space-y-1">
                        <a className="block rounded-md px-3 py-2 text-sm font-medium hover:text-gray-300 text-gray-400 hover:bg-gray-800" href="/layouts">Nested Layouts</a>
                        <a className="block rounded-md px-3 py-2 text-sm font-medium hover:text-gray-300 text-white" href="/route-groups">Grouped Layouts</a>
                        <a className="block rounded-md px-3 py-2 text-sm font-medium hover:text-gray-300 text-gray-400 hover:bg-gray-800" href="/parallel-routes">Parallel Routes</a>
                    </div>
                </div>
                <div>
                    <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400/80">
                        <div>Countries</div>
                    </div>
                    <div className="space-y-1">
                        <a className="block rounded-md px-3 py-2 text-sm font-medium hover:text-gray-300 text-gray-400 hover:bg-gray-800" href="/loading">Loading</a>
                        <a className="block rounded-md px-3 py-2 text-sm font-medium hover:text-gray-300 text-gray-400 hover:bg-gray-800" href="/error-handling">Error</a>
                        <a className="block rounded-md px-3 py-2 text-sm font-medium hover:text-gray-300 text-gray-400 hover:bg-gray-800" href="/not-found">Not Found</a>
                    </div>
                </div>
            </nav>
        </div>
        </div>
    </>
    )
}

export default SidebarNew;