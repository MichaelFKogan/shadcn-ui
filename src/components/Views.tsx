// src/components/Views.tsx
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ViewsNavigation } from "@/components/ViewsNavigation";
import { Card } from "@/components/Card";
import { List } from "@/components/List";
import { Table } from "@/components/Table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button";

import AsiaCountryBadges from "@/components/badges/AsiaCountryBadges";
import ContinentBadges from "@/components/badges/ContinentBadges";
import GroupBadges from "@/components/badges/GroupBadges";
import CityFilter from "@/components/badges/CityFilter";

import './styles/views.css'


export function Views({
    filterKeyword, 
    lastKeyword,
    combinedKeyword,
    breadcrumbKeyword, 
    secondBreadcrumbKeyword, 
    setBreadcrumbKeyword, 
    setSecondBreadcrumbKeyword, 
    clearKeywords,
    clearAll,
    handleKeywordSelection,
    handleFirstBreadcrumb,
    handleCountrySelection,
    handleCategorySelection,
    isSwitchOn,
    handleSwitchChange,
    tableData,
    listData,
    uniqueCategories,
    cleanCategoryForSorting,
    selectedBreadcrumb,
    setSelectedBreadcrumb
}) {

    return (
        <>

<div className="main-wrapper">

    <Breadcrumbs className="mb-2"
        filterKeyword={filterKeyword} 
        lastKeyword={lastKeyword} 
        combinedKeyword={combinedKeyword} 
        breadcrumbKeyword={breadcrumbKeyword} 
        secondBreadcrumbKeyword={secondBreadcrumbKeyword} 
        setBreadcrumbKeyword={setBreadcrumbKeyword} 
        setSecondBreadcrumbKeyword={setSecondBreadcrumbKeyword} 
        clearKeywords={clearKeywords} 
        clearAll={clearAll} 
        // handleKeywordSelection={handleKeywordSelection} 
        handleFirstBreadcrumb={handleFirstBreadcrumb} 
        handleCountrySelection={handleCountrySelection} 
        handleCategorySelection={handleCategorySelection} 
        selectedBreadcrumb={selectedBreadcrumb} 
        setSelectedBreadcrumb={setSelectedBreadcrumb}/>

    <ViewsNavigation 
        filterKeyword={filterKeyword} 
        lastKeyword={lastKeyword}
        combinedKeyword={combinedKeyword}
        breadcrumbKeyword={breadcrumbKeyword} 
        secondBreadcrumbKeyword={secondBreadcrumbKeyword} 
        setBreadcrumbKeyword={setBreadcrumbKeyword} 
        setSecondBreadcrumbKeyword={setSecondBreadcrumbKeyword} 
        clearKeywords={clearKeywords}
        clearAll={clearAll}
        handleKeywordSelection={handleKeywordSelection}
        handleFirstBreadcrumb={handleFirstBreadcrumb}
        handleCountrySelection={handleCountrySelection}
        handleCategorySelection={handleCategorySelection}
        isSwitchOn={isSwitchOn}
        handleSwitchChange={handleSwitchChange}
        tableData={tableData}
        listData={listData}
        uniqueCategories={uniqueCategories}
        cleanCategoryForSorting={cleanCategoryForSorting}
        selectedBreadcrumb={selectedBreadcrumb}
        setSelectedBreadcrumb={setSelectedBreadcrumb}
    />

</div>



        <div className="card-categories-list mt-2 h-11 flex items-center gap-x-4">
            <ul className="flex flex-wrap gap-x-2 gap-y-2 items-center">
                {filterKeyword !== '' ? (
                    <>
                        {Array.from(uniqueCategories).sort((a, b) => cleanCategoryForSorting(a).localeCompare(cleanCategoryForSorting(b))).map((category, index) => (
                            <Badge key={index} variant="secondary" className="badge badge-category category-badge text-sm rounded-md" onClick={() => { handleCategorySelection(`${category}`) }}>
                                {category}
                            </Badge>
                        ))}
                    </>
                ) : null}
            </ul>
        </div>  



            <div className="grid space-y-10">
                <Tabs defaultValue="cards" className="tab-menu views-tab">

                    <TabsList className="mb-4">
                        <TabsTrigger value="cards">Cards</TabsTrigger>
                        <TabsTrigger value="list">List</TabsTrigger>
                        <TabsTrigger value="table">Table</TabsTrigger>
                    </TabsList>

                    <TabsContent value="cards">
                        <div id="card-view">
                            {/* <div className="badges-switch flex items-center space-x-2">
                                <Switch id="card-badges" checked={isSwitchOn} onCheckedChange={handleSwitchChange} />
                                <Label htmlFor="card-badges" className="hover:opacity-20">Show Card Badges</Label>
                            </div> */}
                                
                            {tableData || tableData.length > 0 ? (
                                <>
                                    <Card data={tableData} handleKeywordSelection={handleKeywordSelection} handleCountrySelection={handleCountrySelection} handleCategorySelection={handleCategorySelection} isSwitchOn={isSwitchOn} />
                                </>
                            ) : (null)}

                        </div>
                    </TabsContent>

                    <TabsContent value="list">
                        <div id="list-view">

                            <div className="list-row space-y-8">
                                <div className="grid grid-cols-1 gap-5 lg:max-w-none sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                    {tableData || tableData.length > 0 ? (
                                        <List data={tableData} cleanCategoryForSorting={cleanCategoryForSorting} />
                                    ) : (null)}
                                </div>
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="table">
                        {tableData || tableData.length > 0 ? (
                            <>
                                <div id="table-view">
                                    <Table data={tableData} anchor="table-1" handleKeywordSelection={handleKeywordSelection} handleCountrySelection={handleCountrySelection} handleCategorySelection={handleCategorySelection}/>
                                </div>
                            </>
                        ) : (null)}
                    </TabsContent>

                </Tabs>

            </div>

        </>
    )
}

export default Views;