// src/components/ui/breadcrumbs.tsx

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button";
import { ChevronDown, Slash } from "lucide-react"


export function Breadcrumbs({ setData, handleKeywordSelection, filterKeyword, lastKeyword, breadcrumbKeyword, secondBreadcrumbKeyword, continentBreadcrumbKeyword, setBreadcrumbKeyword, setSecondBreadcrumbKeyword, clearKeywords }) {

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink onClick={() => clearKeywords()}>Home</BreadcrumbLink>
        </BreadcrumbItem>

        {continentBreadcrumbKeyword ?
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink onClick={() => {handleKeywordSelection(breadcrumbKeyword); setSecondBreadcrumbKeyword('')}}>{breadcrumbKeyword}</BreadcrumbLink>
            </BreadcrumbItem>
          </>
          : null
        }

        {breadcrumbKeyword ?
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink onClick={() => {handleKeywordSelection(breadcrumbKeyword); setSecondBreadcrumbKeyword('')}}>{breadcrumbKeyword}</BreadcrumbLink>
            </BreadcrumbItem>
          </>
          : null
        }

        {secondBreadcrumbKeyword ?
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink className="second-breadcrumb" onClick={() => handleKeywordSelection(secondBreadcrumbKeyword)}>{secondBreadcrumbKeyword}</BreadcrumbLink>
            </BreadcrumbItem>
          </>
          : null
        }

        {filterKeyword !== '' ? 
          <Button className="text-xs clear-btn" variant="ghost" onClick={() => clearKeywords()}>Clear</Button>
        : null
        }

        {/* {filterKeyword !== '' && filterKeyword !== ' ' &&

          (filterKeyword.includes(lastKeyword) ? (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink onClick={() => handleKeywordSelection(lastKeyword)}>{lastKeyword}</BreadcrumbLink>
              </BreadcrumbItem>

              <Button className="text-xs clear-btn" variant="ghost" onClick={() => handleKeywordSelection('')}>Clear</Button>
            </>
          ) : (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink onClick={() => handleKeywordSelection(filterKeyword)}>{filterKeyword}</BreadcrumbLink>
              </BreadcrumbItem>

              <Button className="text-xs clear-btn" variant="ghost" onClick={() => handleKeywordSelection('')}>Clear</Button>
            </>
          ))} */}

      </BreadcrumbList>
    </Breadcrumb>

  )
}