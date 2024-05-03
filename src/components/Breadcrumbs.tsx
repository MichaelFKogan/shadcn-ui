// src/components/Breadcrumbs.tsx

import { useState } from "react";
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


export function Breadcrumbs({ handleKeywordSelection, handleFirstBreadcrumb, handleCategorySelection, filterKeyword, lastKeyword, combinedKeyword, breadcrumbKeyword, secondBreadcrumbKeyword, continentBreadcrumbKeyword, setBreadcrumbKeyword, setSecondBreadcrumbKeyword, clearKeywords, clearAll, selectedBreadcrumb, setSelectedBreadcrumb }) {

  return (
    <Breadcrumb>
      <BreadcrumbList style={{marginBottom: "1px"}}>
        <BreadcrumbItem>
          <BreadcrumbLink
            className={`breadcrumb home-breadcrumb ${selectedBreadcrumb === 'home' ? 'selected' : ''}`}
            onClick={() => {clearAll();}}
          >
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>

        {breadcrumbKeyword ?
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink
                className={`breadcrumb first-breadcrumb ${selectedBreadcrumb === 'first' ? 'selected' : ''}`}
                onClick={() => {
                  handleFirstBreadcrumb(breadcrumbKeyword);
                  setSelectedBreadcrumb('first');
                }}
              >
                {breadcrumbKeyword}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </>
          : null
        }

        {secondBreadcrumbKeyword ?
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink
                className={`breadcrumb second-breadcrumb ${selectedBreadcrumb === 'second' ? 'selected' : ''}`}
                onClick={() => {
                  handleKeywordSelection(combinedKeyword);
                  setSelectedBreadcrumb('second');
                }}
              >
                {secondBreadcrumbKeyword}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </>
          : null
        }

        {filterKeyword !== '' ? 
          <Button className="text-xs clear-btn" variant="ghost" onClick={() => clearKeywords()}>Clear</Button>
        : null
        }

      </BreadcrumbList>
    </Breadcrumb>
  );
}