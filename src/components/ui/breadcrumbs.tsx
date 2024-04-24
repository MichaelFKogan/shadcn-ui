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


export function Breadcrumbs({setData, handleKeywordSelection, filterKeyword}) {

    return (
        <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink onClick={() => handleKeywordSelection('')}>Home</BreadcrumbLink>
          </BreadcrumbItem>

          {filterKeyword !== '' ?
            <>
              <BreadcrumbSeparator />

              <BreadcrumbItem>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1">
                  <BreadcrumbLink onClick={() => handleKeywordSelection(filterKeyword)}>{filterKeyword}</BreadcrumbLink>
                  <ChevronDown />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem>Documentation</DropdownMenuItem>
                  <DropdownMenuItem>Themes</DropdownMenuItem>
                  <DropdownMenuItem>GitHub</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              </BreadcrumbItem>

              <Button className="text-xs clear-btn" variant="ghost" onClick={() => handleKeywordSelection('')}>Clear</Button>
            </>
          : null }

        </BreadcrumbList>
      </Breadcrumb>

    )
}