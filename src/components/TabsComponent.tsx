// src/components/TabsComponent.tsx
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Card } from "@/components/Card";
import { List } from "@/components/List";
import { Table } from "@/components/Table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import CountryBadges from "@/components/badges/CountryBadges";
import ContinentBadges from "@/components/badges/ContinentBadges";
import GroupBadges from "@/components/badges/GroupBadges";
import CityFilter from "@/components/badges/CityFilter";


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

            <div className="grid space-y-10">
                <Tabs defaultValue="cards" className="tab-menu mt-1">

                    <Breadcrumbs filterKeyword={filterKeyword} lastKeyword={lastKeyword} combinedKeyword={combinedKeyword} breadcrumbKeyword={breadcrumbKeyword} secondBreadcrumbKeyword={secondBreadcrumbKeyword} setBreadcrumbKeyword={setBreadcrumbKeyword} setSecondBreadcrumbKeyword={setSecondBreadcrumbKeyword} clearKeywords={clearKeywords} clearAll={clearAll} handleKeywordSelection={handleKeywordSelection} handleFirstBreadcrumb={handleFirstBreadcrumb} handleCountrySelecttion={handleCountrySelection} handleCategorySelection={handleCategorySelection} selectedBreadcrumb={selectedBreadcrumb} setSelectedBreadcrumb={setSelectedBreadcrumb}/>

                    <Tabs defaultValue="categories" className="main-tabs-menu w-full mb-2">

                        <TabsList className="mr-auto">
                            <TabsTrigger value="categories">🗄 Categories</TabsTrigger>
                            <TabsTrigger value="countries">🌏 Countries</TabsTrigger>
                        </TabsList>
                            
                            <TabsContent value="countries">
                                <Tabs defaultValue="" className="w-full mb-2">

                                    <TabsList className="mr-auto">
                                        <TabsTrigger value="asia">⛩ Asia</TabsTrigger>
                                        <TabsTrigger value="latinamerica">💃🏻 Latin America</TabsTrigger>
                                        <TabsTrigger value="europe">🇪🇺 Europe</TabsTrigger>
                                        <TabsTrigger value="middleeast">🕌 Middle East</TabsTrigger>
                                        <TabsTrigger value="oceaniad">🌊 Oceania</TabsTrigger>
                                    </TabsList>

                                    <TabsContent value="asia"><CountryBadges filterKeyword={filterKeyword} handleCountrySelection={handleCountrySelection} /></TabsContent>
                                    <TabsContent value="latinamerica">Change your password here.</TabsContent>
                                    <TabsContent value="europe">Make changes to your account here.</TabsContent>
                                    <TabsContent value="middleeast">Change your password here.</TabsContent>
                                    <TabsContent value="oceania">Change your password here.</TabsContent>

                                </Tabs>
                            </TabsContent>

                        <TabsContent value="categories">
                            <Tabs defaultValue="" className="w-full mb-2">

                                <TabsList className="mr-auto">
                                    <TabsTrigger value="featured">💯 Featured</TabsTrigger>
                                    <TabsTrigger value="essentials">📍 Essentials</TabsTrigger>
                                    <TabsTrigger value="socialmedia">📸 Social Media</TabsTrigger>
                                    <TabsTrigger value="jobs">👔 Jobs</TabsTrigger> 
                                    <TabsTrigger value="lifestyle">🏄‍♀️ Lifestyle</TabsTrigger>
                                    <TabsTrigger value="learn">📘 Learn</TabsTrigger> 
                                </TabsList>
                                
                                <TabsContent value="featured"> Featured</TabsContent>
                                <TabsContent value="essentials">Change your password here.</TabsContent>
                                <TabsContent value="socialmedia">Make changes to your account here.</TabsContent>
                                <TabsContent value="jobs">Change your password here.</TabsContent>
                                <TabsContent value="lifestyle">Change your password here.</TabsContent>
                                <TabsContent value="learn">Change your password here.</TabsContent>
                        </Tabs>
                    </TabsContent>
                </Tabs>

                  


                    {/* {filterKeyword === '' || filterKeyword === 'Featured' || filterKeyword === 'Essentials' || filterKeyword === 'Social Media' || filterKeyword === 'Jobs' || filterKeyword === 'Lifestyle' || filterKeyword === 'Learn' ? (
                                <div className='continent-badges-list'>
                                    <ul className="flex flex-wrap gap-x-2 gap-y-2 items-center">
                                        <ContinentBadges filterKeyword={filterKeyword} handleCountrySelection={handleCountrySelection} />
                                    </ul>
                                </div>
                                ) : null} */}

                                <div className='continent-badges-list flex justify-center items-center gap-x-4'>
                                    {/* <p className="w-20 text-sm">Countries</p> */}
                                    <ul className="flex flex-wrap gap-x-2 gap-y-2 justify-center items-center">
                                {filterKeyword === 'Asia' ? ( 
                                    <>       
                                        <CountryBadges filterKeyword={filterKeyword} handleCountrySelection={handleCountrySelection} />
                                    </>
                                ) : null}

                                        <CityFilter filterKeyword={filterKeyword} handleCountrySelection={handleCountrySelection} />

                                    </ul>
                                </div>

                                {/* {filterKeyword === '' || (filterKeyword === 'Featured' || filterKeyword === 'Essentials' || filterKeyword === 'Social Media' || filterKeyword === 'Jobs' || filterKeyword === 'Lifestyle' || filterKeyword === 'Learn') ? ( 
                                    <>        
                                        <GroupBadges filterKeyword={filterKeyword} handleCountrySelection={handleCountrySelection} />
                                    </>
                                ) : null } */}

{                               filterKeyword !== '' ? (
                                        <>
                                            <div className="card-categories-list mt-2 mb-2 flex items-center gap-x-4">
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
                                    ) : null
                                    }


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