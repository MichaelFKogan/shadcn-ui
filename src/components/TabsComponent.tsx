import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Card } from "@/components/Card";
import { List } from "@/components/List";
import { Table } from "@/components/Table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TabsComponent({
    filterKeyword, 
    lastKeyword, 
    breadcrumbKeyword, 
    secondBreadcrumbKeyword, 
    continentBreadcrumbKeyword, 
    setBreadcrumbKeyword, 
    setSecondBreadcrumbKeyword, 
    clearKeywords, 
    handleKeywordSelection, 
    isSwitchOn,
    handleSwitchChange,
    tableData,
    listData
}) {

    return (
        <>

            <div className="grid space-y-10">
                <Tabs defaultValue="cards" className="tab-menu mt-4">

                    <Breadcrumbs filterKeyword={filterKeyword} lastKeyword={lastKeyword} breadcrumbKeyword={breadcrumbKeyword} secondBreadcrumbKeyword={secondBreadcrumbKeyword} continentBreadcrumbKeyword={continentBreadcrumbKeyword} setBreadcrumbKeyword={setBreadcrumbKeyword} setSecondBreadcrumbKeyword={setSecondBreadcrumbKeyword} clearKeywords={clearKeywords} handleKeywordSelection={handleKeywordSelection} />


                    <TabsList className="mb-2">
                        <TabsTrigger value="cards">Cards</TabsTrigger>
                        <TabsTrigger value="list">List</TabsTrigger>
                        <TabsTrigger value="table">Table</TabsTrigger>
                    </TabsList>

                    <TabsContent value="cards">

                        <div id="card-view">
                            <div className="badges-switch flex items-center space-x-2">
                                <Switch id="card-badges" checked={isSwitchOn} onCheckedChange={handleSwitchChange} />
                                <Label htmlFor="card-badges" className="hover:opacity-20">Show Card Badges</Label>
                            </div>

                            {tableData && tableData.length > 0 ? (
                                <>
                                    {filterKeyword !== '' ? (
                                        <>
                                            <div className="card-categories-list">
                                                {Array.from(uniqueCategories).sort((a, b) => cleanCategoryForSorting(a).localeCompare(cleanCategoryForSorting(b))).map((category, index) => (
                                                    <Badge key={index} variant="secondary" className="badge badge-category mb-2 text-xs ml-2" onClick={() => { handleKeywordSelection(`${lastKeyword} ${category}`) }}>
                                                        {category}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </>
                                    ) : null
                                    }
                                    <Card data={tableData} onSelectKeyword={handleKeywordSelection} isSwitchOn={isSwitchOn} />
                                </>
                            ) : (null)}

                        </div>
                    </TabsContent>

                    <TabsContent value="list">
                        <div id="list-view">
                            <div className="list-row space-y-8">
                                <div className="grid grid-cols-1 gap-5 lg:max-w-none sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                    {listData && listData.length > 0 ? (
                                        <List data={listData} />
                                    ) : (null)}
                                </div>
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="table">
                        {tableData && tableData.length > 0 ? (
                            <div id="table-view">
                                <Table data={tableData} anchor="table-1" onSelectKeyword={handleKeywordSelection} />
                            </div>
                        ) : (null)}
                    </TabsContent>

                </Tabs>

            </div>

        </>
    )
}

export default TabsComponent;