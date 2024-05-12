// src/components/Views.tsx
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
import EssentialsBadges from "@/components/badges/EssentialsBadges";

import CityFilter from "@/components/badges/CityFilter";

import './styles/views.css'


export function ViewsNavigation({
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

    return (
        <>

    <Tabs defaultValue="categories" className="categories-countries-tab w-full">

        <TabsList className="mr-auto">
            <TabsTrigger value="categories" onClick={() => { clearAll() }}>🗄 Categories</TabsTrigger>
            <TabsTrigger value="countries" onClick={() => { clearAll() }}>🌏 Countries</TabsTrigger>
        </TabsList>

        <TabsContent value="countries">
            <Tabs defaultValue="" className="w-full mb-2 countries-tab">

                <TabsList className="mr-auto">
                    <TabsTrigger value="asia" onClick={() => { handleCountrySelection("⛩ Asia") }}>⛩ Asia</TabsTrigger>
                    <TabsTrigger value="latinamerica" onClick={() => { handleCountrySelection("💃🏻 Latin America") }}>💃🏻 Latin America</TabsTrigger>
                    <TabsTrigger value="europe" onClick={() => { handleCountrySelection("🇪🇺 Europe") }}>🇪🇺 Europe</TabsTrigger>
                    <TabsTrigger value="middleeast" onClick={() => { handleCountrySelection("🕌 Middle East") }}>🕌 Middle East</TabsTrigger>
                    <TabsTrigger value="oceaniad" onClick={() => { handleCountrySelection("🌊 Oceania") }}>🌊 Oceania</TabsTrigger>
                </TabsList>

                <TabsContent value="asia">
                    {filterKeyword === 'Asia' ? ( 
                        <>       
                            <AsiaCountryBadges filterKeyword={filterKeyword} handleCountrySelection={handleCountrySelection} />
                        </>
                    ) : null}
                            <CityFilter filterKeyword={filterKeyword} handleCountrySelection={handleCountrySelection} />
                </TabsContent>
                <TabsContent value="latinamerica"></TabsContent>
                <TabsContent value="europe"></TabsContent>
                <TabsContent value="middleeast"></TabsContent>
                <TabsContent value="oceania"></TabsContent>
            </Tabs>
        </TabsContent>

        <TabsContent value="categories">
            <Tabs defaultValue="" className="w-full mb-2 categories-tab">

                <TabsList className="mr-auto">
                    <TabsTrigger value="featured" onClick={() => { handleCountrySelection("💯 Featured") }}>💯 Featured</TabsTrigger>
                    <TabsTrigger value="essentials" onClick={() => { handleCountrySelection("📍 Essentials") }}>📍 Essentials</TabsTrigger>
                    <TabsTrigger value="socialmedia" onClick={() => { handleCountrySelection("📸 Social Media") }}>📸 Social Media</TabsTrigger>
                    <TabsTrigger value="jobs" onClick={() => { handleCountrySelection("👔 Jobs") }}>👔 Jobs</TabsTrigger> 
                    <TabsTrigger value="lifestyle" onClick={() => { handleCountrySelection("🏄‍♀️ Lifestyle") }}>🏄‍♀️ Lifestyle</TabsTrigger>
                    <TabsTrigger value="learn" onClick={() => { handleCountrySelection("📘 Learn") }}>📘 Learn</TabsTrigger> 
                </TabsList>
                
                <TabsContent value="featured"></TabsContent>
                <TabsContent value="essentials">
                    <EssentialsBadges filterKeyword={filterKeyword} handleCountrySelection={handleCountrySelection} />
                </TabsContent>
                <TabsContent value="socialmedia"></TabsContent>
                <TabsContent value="jobs"></TabsContent>
                <TabsContent value="lifestyle"></TabsContent>
                <TabsContent value="learn"></TabsContent>
            </Tabs>
        </TabsContent>




            {/* <div className="mb-2 h-11">
                <ContinentBadges filterKeyword={filterKeyword} handleCountrySelection={handleCountrySelection} />
            </div>
            <div className="mb-2 h-11"> 
                {filterKeyword === 'Asia' ? ( 
                    <>       
                        <AsiaCountryBadges filterKeyword={filterKeyword} handleCountrySelection={handleCountrySelection} />
                    </>
                ) : null}
                <CityFilter filterKeyword={filterKeyword} handleCountrySelection={handleCountrySelection} />
            </div>
        </TabsContent> */}

        {/* <TabsContent value="categories">
            <div className="mb-2 h-11">
                <GroupBadges filterKeyword={filterKeyword} handleCountrySelection={handleCountrySelection} />
            </div>
            <div className="mb-2 h-11">
                <EssentialsBadges filterKeyword={filterKeyword} handleCountrySelection={handleCountrySelection} />
            </div>
        </TabsContent> */}

    </Tabs>



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




                {filterKeyword === 'Asia' ? ( 
                <>       
                    {/* <AsiaCountryBadges filterKeyword={filterKeyword} handleCountrySelection={handleCountrySelection} /> */}
                </>
            ) : null}


                    {/* <CityFilter filterKeyword={filterKeyword} handleCountrySelection={handleCountrySelection} /> */}


            {/* {filterKeyword === '' || (filterKeyword === 'Featured' || filterKeyword === 'Essentials' || filterKeyword === 'Social Media' || filterKeyword === 'Jobs' || filterKeyword === 'Lifestyle' || filterKeyword === 'Learn') ? (  */}
                <>        
                    {/* <GroupBadges filterKeyword={filterKeyword} handleCountrySelection={handleCountrySelection} /> */}
                </>
            {/* ) : null } */}


            {/* {filterKeyword === '' || filterKeyword === 'Featured' || filterKeyword === 'Essentials' || filterKeyword === 'Social Media' || filterKeyword === 'Jobs' || filterKeyword === 'Lifestyle' || filterKeyword === 'Learn' ? (
                <>
                <div className="card-categories-list flex items-center gap-x-4">
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
             ) : null} */}


            {/* {filterKeyword !== '' ? (
                <>
                    <div className="card-categories-list mb-2 flex items-center gap-x-4">
                        <ul className="flex flex-wrap gap-x-2 gap-y-2 items-center">
                            {Array.from(uniqueCategories).sort((a, b) => cleanCategoryForSorting(a).localeCompare(cleanCategoryForSorting(b))).map((category, index) => (
                                <Badge key={index} variant="secondary" className="badge badge-category category-badge text-sm rounded-md" onClick={() => { handleCategorySelection(`${category}`) }}>
                                    {category}
                                </Badge>
                            ))}

                        </ul>
                    </div>
                </>
             ) : null} */}






        </>
    )
}

export default ViewsNavigation;