// src/components/TabsComponent.tsx
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Card } from "@/components/Card";
import { List } from "@/components/List";
import { Table } from "@/components/Table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button";

import AsiaCountryBadges from "@/components/badges/AsiaCountryBadges";
import ContinentBadges from "@/components/badges/ContinentBadges";
import GroupBadges from "@/components/badges/GroupBadges";
import CityFilter from "@/components/badges/CityFilter";

import './styles/tabscomponent.css'


export function TabsComponent({
    filterKeyword, 
    lastKeyword,
    combinedKeyword,
    breadcrumbKeyword, 
    secondBreadcrumbKeyword, 
    continentBreadcrumbKeyword, 
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

    console.log("FILTER KEYWORD");
    console.log(filterKeyword);

    return (
        <>

<div className="main-wrapper">

<Breadcrumbs filterKeyword={filterKeyword} lastKeyword={lastKeyword} combinedKeyword={combinedKeyword} breadcrumbKeyword={breadcrumbKeyword} secondBreadcrumbKeyword={secondBreadcrumbKeyword} setBreadcrumbKeyword={setBreadcrumbKeyword} setSecondBreadcrumbKeyword={setSecondBreadcrumbKeyword} clearKeywords={clearKeywords} clearAll={clearAll} handleKeywordSelection={handleKeywordSelection} handleFirstBreadcrumb={handleFirstBreadcrumb} handleCountrySelecttion={handleCountrySelection} handleCategorySelection={handleCategorySelection} selectedBreadcrumb={selectedBreadcrumb} setSelectedBreadcrumb={setSelectedBreadcrumb}/>

{/* <Tabs defaultValue="categories" className="categories-countries-tab w-full">

    <TabsList className="mr-auto">
        <TabsTrigger value="categories" onClick={() => { clearAll() }}>🗄 Categories</TabsTrigger>
        <TabsTrigger value="countries" onClick={() => { clearAll() }}>🌏 Countries</TabsTrigger>
    </TabsList>
        
        <TabsContent value="countries">
            <Tabs defaultValue="asia" className="w-full mb-2 countries-tab">

                <TabsList className="mr-auto">
                    <TabsTrigger value="asia" onClick={() => { handleCountrySelection("⛩ Asia") }}>⛩ Asia</TabsTrigger>
                    <TabsTrigger value="latinamerica" onClick={() => { handleCountrySelection("💃🏻 Latin America") }}>💃🏻 Latin America</TabsTrigger>
                    <TabsTrigger value="europe" onClick={() => { handleCountrySelection("🇪🇺 Europe") }}>🇪🇺 Europe</TabsTrigger>
                    <TabsTrigger value="middleeast" onClick={() => { handleCountrySelection("🕌 Middle East") }}>🕌 Middle East</TabsTrigger>
                    <TabsTrigger value="oceaniad" onClick={() => { handleCountrySelection("🌊 Oceania") }}>🌊 Oceania</TabsTrigger>
                </TabsList>

                <TabsContent value="asia">
                    <AsiaCountryBadges filterKeyword={filterKeyword} handleCountrySelection={handleCountrySelection} />
                </TabsContent>
                <TabsContent value="latinamerica"></TabsContent>
                <TabsContent value="europe"></TabsContent>
                <TabsContent value="middleeast"></TabsContent>
                <TabsContent value="oceania"></TabsContent>

            </Tabs>
        </TabsContent>

        <TabsContent value="categories">
            <Tabs defaultValue="essentials" className="w-full mb-2 categories-tab">

                <TabsList className="mr-auto">
                    <TabsTrigger value="featured" onClick={() => { handleCountrySelection("💯 Featured") }}>💯 Featured</TabsTrigger>
                    <TabsTrigger value="essentials" onClick={() => { handleCountrySelection("📍 Essentials") }}>📍 Essentials</TabsTrigger>
                    <TabsTrigger value="socialmedia" onClick={() => { handleCountrySelection("📸 Social Media") }}>📸 Social Media</TabsTrigger>
                    <TabsTrigger value="jobs" onClick={() => { handleCountrySelection("👔 Jobs") }}>👔 Jobs</TabsTrigger> 
                    <TabsTrigger value="lifestyle" onClick={() => { handleCountrySelection("🏄‍♀️ Lifestyle") }}>🏄‍♀️ Lifestyle</TabsTrigger>
                    <TabsTrigger value="learn" onClick={() => { handleCountrySelection("📘 Learn") }}>📘 Learn</TabsTrigger> 
                </TabsList>
                
                <TabsContent value="featured"></TabsContent>
                <TabsContent value="essentials"></TabsContent>
                <TabsContent value="socialmedia"></TabsContent>
                <TabsContent value="jobs"></TabsContent>
                <TabsContent value="lifestyle"></TabsContent>
                <TabsContent value="learn"></TabsContent>
            </Tabs>
        </TabsContent>
</Tabs> */}




            <div className='continent-badges-list'>
                <ul className="flex flex-wrap gap-x-2 gap-y-2 items-center">
                {filterKeyword === '' ? ( 
                <>
                    <ContinentBadges filterKeyword={filterKeyword} handleCountrySelection={handleCountrySelection} />
                </>
                ) : null}
                {filterKeyword === 'Asia' ? ( 
                <>       
                    <AsiaCountryBadges filterKeyword={filterKeyword} handleCountrySelection={handleCountrySelection} />
                </>
            ) : null}
                </ul>
            </div>

            <div className='city-badges-list flex justify-start items-center gap-x-4 mb-2'>
                {/* <p className="w-20 text-sm">Countries</p> */}
                <ul className="flex flex-wrap gap-x-2 gap-y-2 justify-center items-center">
            {/* {filterKeyword === 'Asia' ? ( 
                <>       
                    <AsiaCountryBadges filterKeyword={filterKeyword} handleCountrySelection={handleCountrySelection} />
                </>
            ) : null} */}

                    <CityFilter filterKeyword={filterKeyword} handleCountrySelection={handleCountrySelection} />

                </ul>
            </div>

            {/* {filterKeyword === '' || (filterKeyword === 'Featured' || filterKeyword === 'Essentials' || filterKeyword === 'Social Media' || filterKeyword === 'Jobs' || filterKeyword === 'Lifestyle' || filterKeyword === 'Learn') ? ( 
                <>        
                    <GroupBadges filterKeyword={filterKeyword} handleCountrySelection={handleCountrySelection} />
                </>
            ) : null } */}


            {filterKeyword === '' ? (
                <>
                <div className="card-categories-list mb-2 flex items-center gap-x-4">
                    <ul className="flex flex-wrap gap-x-2 gap-y-2 items-center">
                        <Badge variant="secondary" className="badge badge-category category-badge text-sm rounded-md" onClick={() => { handleCategorySelection("💯 Featured") }}>
                            💯 Featured
                        </Badge>
                        <Badge variant="secondary" className="badge badge-category category-badge text-sm rounded-md" onClick={() => { handleCategorySelection("📍 Essentials") }}>
                            📍 Essentials
                        </Badge>
                        <Badge variant="secondary" className="badge badge-category category-badge text-sm rounded-md" onClick={() => { handleCategorySelection("📸 Social Media") }}>
                            📸 Social Media
                        </Badge>
                        <Badge variant="secondary" className="badge badge-category category-badge text-sm rounded-md" onClick={() => { handleCategorySelection("👔 Work") }}>
                            👔 Work
                        </Badge>
                        <Badge variant="secondary" className="badge badge-category category-badge text-sm rounded-md" onClick={() => { handleCategorySelection("🏄‍♂️ Social Media") }}>
                            🏄‍♂️ Lifestyle
                        </Badge>
                        <Badge variant="secondary" className="badge badge-category category-badge text-sm rounded-md" onClick={() => { handleCategorySelection("📘 Learn") }}>
                            📘 Learn
                        </Badge>
                    </ul>
                </div>
                </>
             ) : null}


            {filterKeyword !== '' ? (
                <>
                    <div className="card-categories-list mb-2 flex items-center gap-x-4">
                    {/* <p className="w-20 text-sm">Categories</p> */}
                        <ul className="flex flex-wrap gap-x-2 gap-y-2 items-center">
                            {Array.from(uniqueCategories).sort((a, b) => cleanCategoryForSorting(a).localeCompare(cleanCategoryForSorting(b))).map((category, index) => (
                                <Badge key={index} variant="secondary" className="badge badge-category category-badge text-sm rounded-md" onClick={() => { handleCategorySelection(`${category}`) }}>
                                    {category}
                                </Badge>
                            ))}

                        </ul>
                    </div>
                </>
             ) : null}



</div>





            <div className="grid space-y-10">
                <Tabs defaultValue="cards" className="tab-menu views-tab mt-1">

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

export default TabsComponent;