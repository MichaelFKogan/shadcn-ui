// src/components/ui/breadcrumbs.tsx

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
  import { Button } from "@/components/ui/button";


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
                <BreadcrumbLink onClick={() => handleKeywordSelection(filterKeyword)}>{filterKeyword}</BreadcrumbLink>
              </BreadcrumbItem>

              <Button className="text-xs clear-btn" variant="ghost" onClick={() => handleKeywordSelection('')}>Clear</Button>
            </>
          : null }

        </BreadcrumbList>
      </Breadcrumb>

    )
}