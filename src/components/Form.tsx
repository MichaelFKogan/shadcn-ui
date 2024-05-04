// src/components/Login.tsx
import React, { useState, useEffect } from 'react';
import './styles/form.css'
import '../app/globals.css';

import Select from 'react-select'
import CreatableSelect from 'react-select/creatable';
import makeAnimated from 'react-select/animated';

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

import categoryGroupedOptions from '../data/categoryFormData.js';
import groupedOptions from '../data/tagsFormData.js';
import cityGroupedOptions from '../data/cityFormData.js'
import countries from '../data/countryFormData.js';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
  } from "@/components/ui/dialog"
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"


export function Form() {

    const [selectedOptions, setSelectedOptions] = useState([]);
    const [isClearable, setIsClearable] = useState(true);
    const animatedComponents = makeAnimated();

    const [linkData, setLinkData] = useState({
        rank: '',
        votes:'',
        name:'',
        url: '',
        category: '',
        tags: [],
        city: '',
        country: '',
        continent: '',
        date: new Date(), // Add a date field with the current date as default
        // addedBy: user ? { uid: user.uid, email: user.email } : null, // Store relevant user information
      });

      const [formErrors, setFormErrors] = useState({
        name:'',
        url: '',
        category: '',
      });

      const continents = [
        {value: "Worldwide", label: "🌏 Worldwide"},
        {value: "Asia", label: "⛩️ Asia "},
        {value: "Latin America", label: "💃 Latin America "},
        {value: "Europe", label: "🇪🇺 Europe"},
        {value: "North America", label: "🗽 North America"},
        {value: "Middle East", label: "🕌 Middle East"},
        {value: "Oceania", label: "🏄 Oceania"},
        {value: "Africa", label: "🦓 Africa"},
      ]

      const handleInputChange = (e) => {
        // console.log(e);
        console.log(linkData);
        const { name, value } = e.target;
        setLinkData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleDropdownChange = (name, value) => {
        setLinkData((prevData) => ({
          ...prevData,
          [name]: value ? value.label : '',  // Check if value exists before accessing its property
        }));
      };  

      const handleTagsChange = (name, value) => {
        // Set the maximum number of selections to 5
        const maxSelections = 5;

            // Check if the number of selected options is less than the maximum limit
    if (value.length <= maxSelections) {
      setSelectedOptions(value);

        setLinkData((prevData) => ({
          ...prevData,
          [name]: value ? (Array.isArray(value) ? value.map(tag => tag.label) : value.label) : '',  
        }));
      };
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const errors = {};
    
        // Check if required fields are empty and set errors
        if (!linkData.name) {
          errors.name = 'Name is required';
        }
        if (!linkData.url) {
          errors.url = 'URL is required';
        }
        if (!linkData.category) {
          errors.category = 'Category is required';
        }
    
        // Check conditional validation based on city, country, and continent
        if (linkData.city) {
          // If city is chosen, validate country and continent
          if (!linkData.country) {
            errors.country = 'Country is required when a city is chosen';
          }
          if (!linkData.continent) {
            errors.continent = 'Continent is required when a city is chosen';
          }
        }
    
        // Check conditional validation based on city, country, and continent
        if (linkData.country) {
          if (!linkData.continent) {
            errors.continent = 'Continent is required when a country is chosen';
          }
        }
      
        // If there are errors, set them in the state and prevent submission
        if (Object.keys(errors).length > 0) {
          setFormErrors(errors);
          // Scroll back to the top of the page
          window.scrollTo(0, 0);
          return;
        }
        try {
          const linksCollection = collection(firestore, 'Links');
           // Convert addedBy to a plain JavaScript object
          const addedByObject = user ? { uid: user.uid, email: user.email } : null;
          await addDoc(linksCollection, { ...linkData, addedBy: addedByObject, date: new Date() });
          // Clear the form after successful submission
          setLinkData({
            rank: '',
            votes:'',
            name:'',
            url: '',
            category: '',
            tags: [],
            city: '',
            country: '',
            continent: '',
            date: new Date(), // Add a date field with the current date as default
            addedBy: addedByObject, // Store relevant user informationinformation
          });
          setIsFormSubmitted(true);  // Set form submission status to true
          // Clear errors after successful submission
          setFormErrors({});
        } catch (error) {
          console.error('Error adding document:', error);
        }
      };

      const textColor = getComputedStyle(document.documentElement).getPropertyValue('--foreground');
      const badgeBackground = getComputedStyle(document.documentElement).getPropertyValue('--muted');

      const mutedTextForeground = getComputedStyle(document.documentElement).getPropertyValue('--muted-foreground');

      const backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--background');
      const borderColor = getComputedStyle(document.documentElement).getPropertyValue('--input');

    // Group Titles
    const groupStyles = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      color:`hsl(${mutedTextForeground})`,
      fontSize:'12px',
    };
    // Badges
    const groupBadgeStyles: CSSProperties = {
      backgroundColor: `hsl(${badgeBackground})`,
      borderRadius: '2em',
      color: `hsl(${textColor})`,
      display: 'inline-block',
      fontSize: '11px',
      fontWeight: 'normal',
      lineHeight: '1',
      minWidth: 1,
      padding: '0.16666666666667em 0.5em',
      textAlign: 'center',
    };
    
    const formatGroupLabel = (data: GroupedOption) => (
      <div style={groupStyles}>
        <span>{data.label}</span>
        <span style={groupBadgeStyles}>{data.options.length}</span>
      </div>
    );
  

  return (
    <>

        <Dialog>
            <DialogTrigger asChild>
            <a className="text-sm transition-colors hover:text-foreground/80 text-foreground/60">Submit A Link</a>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <form>
                <DialogHeader>
                <DialogTitle>Submit A Link</DialogTitle>
                {/* <DialogDescription>
                    Make changes to your profile here. Click save when you're done.
                </DialogDescription> */}
                </DialogHeader>

                <div className="grid gap-4 py-4">

                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                        Name
                        </Label>
                        <Input
                        id="name"
                        defaultValue=""
                        className="col-span-3"
                        />
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                        URL
                        </Label>
                        <Input
                        id="username"
                        defaultValue=""
                        className="col-span-3"
                        />
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                        {/* <label for="inputUrl" class="form-label">Category  */}
                        {/* <span className="text-muted-foreground text-xs"> [required]</span> */}
                        {/* <br/><small className='text-muted-foreground'>Create a category here if you don't see it in the list</small> */}
                        {/* </label> */}
                        <Label htmlFor="category" className="text-right">
                        Category
                        </Label>

                        <CreatableSelect 
                            options={categoryGroupedOptions}
                            formatGroupLabel={formatGroupLabel}
                            type="text" className="form-control col-span-3" id="inputCategory" name="category" 
                            value={linkData.category.value}
                            onChange={(selectedOption) => handleDropdownChange("category", selectedOption)} 
                            isClearable={isClearable} placeholder="Add or create category" aria-describedby="categoryHelp"
                            styles={{control: (provided) => ({...provided, }), option: (provided) => ({...provided, color:`hsl(${mutedTextForeground})`, fontSize: '12px'}),}}
                            />
                        {/* <div className="text-danger">{formErrors.category}</div> */}
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="tags" className="text-right">
                        Tags
                        </Label>

                        <CreatableSelect
                            options={groupedOptions}
                            formatGroupLabel={formatGroupLabel}
                            type="text" className="form-control col-span-3" id="inputTags" name="tags"
                            value={linkData.tags.map(tag => ({ value: tag, label: tag }))}
                            closeMenuOnSelect={false} components={animatedComponents}
                            defaultValue={[]} isMulti
                            onChange={(selectedOption) => handleTagsChange("tags", selectedOption)}
                            isClearable={isClearable} placeholder="Add or create tags" aria-describedby="tagsHelp" 
                            styles={{control: (provided) => ({...provided, }), option: (provided) => ({...provided, color:`hsl(${mutedTextForeground})`, fontSize: '12px'}),}}
                            />
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="city" className="text-right">
                            City
                        </Label>

                        <CreatableSelect
                            options={cityGroupedOptions}
                            // options={cities} 
                            type="text" className="form-control col-span-3" id="inputCity" name="city" 
                            value={linkData.city.label}
                            onChange={(selectedOption) => handleDropdownChange("city", selectedOption)} 
                            isClearable={isClearable} placeholder="Add city" aria-describedby="cityHelp" />
                            {/* <div className="text-danger">{formErrors.city}</div> */}
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="city" className="text-right">
                            City
                        </Label>

                        <CreatableSelect
                            options={cityGroupedOptions}
                            // options={cities} 
                            type="text" className="form-control col-span-3" id="inputCity" name="city" 
                            value={linkData.city.label}
                            onChange={(selectedOption) => handleDropdownChange("city", selectedOption)} 
                            isClearable={isClearable} placeholder="Add city" aria-describedby="cityHelp" />
                            {/* <div className="text-danger">{formErrors.city}</div> */}
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="country" className="text-right">
                            Country
                        </Label>

                        <Select options={countries} type="text" className="form-control col-span-3" id="inputCountry" name="country" 
                            value={linkData.country.label}
                            onChange={(selectedOption) => handleDropdownChange("country", selectedOption)} 
                            isClearable={isClearable} placeholder="Add country" aria-describedby="countryHelp" />
                            {/* <div className="text-danger">{formErrors.country}</div> */}
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="continent" className="text-right">
                            Continent
                        </Label>

                        <Select options={continents} type="text" className="form-control col-span-3" id="inputContinent" name="continent" 
                            value={linkData.continent.value}
                            onChange={(selectedOption) => handleDropdownChange("continent", selectedOption)} 
                            isClearable={isClearable} placeholder="Add continent" aria-describedby="continentHelp" />
                            {/* <div className="text-danger">{formErrors.continent}</div> */}
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="dsecription" className="text-right">
                            Description
                        </Label>
                        <Textarea className="form-control col-span-3" />
                    </div>

                </div>
                <DialogFooter>
                <Button variant="outline" type="submit">Submit</Button>
                </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>

        <Dialog>
            <DialogTrigger><a className="text-sm transition-colors hover:text-foreground/80 text-foreground/60">Submit A Link</a></DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                    <DialogTitle className="ml-4">You must be logged in to submit a link</DialogTitle>

                    <DialogDescription>

  
                    <form className="add-link-form" onSubmit={handleSubmit}>

                        <Card className="mt-6 p-10">
                        {/* <CardHeader>
                            <CardTitle>Title</CardTitle>
                            <CardDescription>Title</CardDescription>
                        </CardHeader> */}

                        <CardContent className="mt-6">
                            <label for="inputName" class="form-label">Name 
                                <span className="text-muted-foreground text-xs"> [required]</span>
                            </label>
                            <Input type="text" className="form-control" id="inputName" name="name" value={linkData.name} onChange={handleInputChange} aria-describedby="nameHelp" placeholder="Name" />
                            <div className="text-red-400">{formErrors.name}</div>
                        </CardContent>

                        <CardContent>
                            <label for="inputUrl" class="form-label">URL 
                                <span className="text-muted-foreground text-xs"> [required]</span>
                            </label>
                            <Input type="text" className="form-control" id="inputUrl" name="url" value={linkData.url} onChange={handleInputChange} aria-describedby="urlHelp" placeholder="URL" />
                                <div className="text-red-400">{formErrors.url}</div>
                        </CardContent>

                        <CardContent>
                            <label for="inputUrl" class="form-label">Category 
                                <span className="text-muted-foreground text-xs"> [required]</span>
                                {/* <br/><small className='text-muted-foreground'>Create a category here if you don't see it in the list</small> */}
                            </label>

                            <CreatableSelect 
                                options={categoryGroupedOptions}
                                // formatGroupLabel={formatGroupLabel}
                                type="text" class="form-control" id="inputCategory" name="category" 
                                value={linkData.category.value}
                                onChange={(selectedOption) => handleDropdownChange("category", selectedOption)} 
                                isClearable={isClearable} placeholder="Add or create category" aria-describedby="categoryHelp"
                                styles={{control: (provided) => ({...provided, }), option: (provided) => ({...provided, color:'#21259', fontSize: '14px'}),}}
                                />
                            <div className="text-danger">{formErrors.category}</div>

                        </CardContent>


                        <hr className='mt-4 pb-4'/>
                        <CardContent><h3 className='text-muted-foreground text-md'>(Optional)</h3></CardContent>

                        <CardContent>

                            <label for="inputUrl" class="form-label mb-1">Tags</label>
                                <br/><small className='text-muted-foreground'>Create a tag here if you don't see it in the list</small>

                            <CreatableSelect
                                options={groupedOptions}
                                // formatGroupLabel={formatGroupLabel}
                                type="text" class="form-control" id="inputTags" name="tags"
                                value={linkData.tags.map(tag => ({ value: tag, label: tag }))}
                                closeMenuOnSelect={false} components={animatedComponents}
                                defaultValue={[]} isMulti
                                onChange={(selectedOption) => handleTagsChange("tags", selectedOption)}
                                isClearable={isClearable} placeholder="Add or create tags" aria-describedby="tagsHelp" 
                                styles={{control: (provided) => ({...provided, }), option: (provided) => ({...provided, color:'#21259', fontSize: '14px'}),}}
                                />
                        </CardContent>

                        <CardContent>

                            <label for="inputUrl" class="form-label">City</label>
                            <br/><small className='text-muted-foreground'>Create a city here if you don't see it in the list</small>

                            <CreatableSelect
                                options={cityGroupedOptions}
                                // options={cities} 
                                type="text" class="form-control" id="inputCity" name="city" 
                                value={linkData.city.label}
                                onChange={(selectedOption) => handleDropdownChange("city", selectedOption)} 
                                isClearable={isClearable} placeholder="Add city" aria-describedby="cityHelp" />
                                <div className="text-danger">{formErrors.city}</div>

                        </CardContent>

                        <CardContent>
                            <label for="inputUrl" class="form-label">Country</label>
                                <Select options={countries} type="text" class="form-control" id="inputCountry" name="country" 
                                value={linkData.country.label}
                                onChange={(selectedOption) => handleDropdownChange("country", selectedOption)} 
                                isClearable={isClearable} placeholder="Add country" aria-describedby="countryHelp" />
                                <div className="text-danger">{formErrors.country}</div>
                        </CardContent>

                        <CardContent>
                            <label for="inputUrl" class="form-label">Continent</label>
                                <Select options={continents} type="text" class="form-control" id="inputContinent" name="continent" 
                                value={linkData.continent.value}
                                onChange={(selectedOption) => handleDropdownChange("continent", selectedOption)} 
                                isClearable={isClearable} placeholder="Add continent" aria-describedby="continentHelp" />
                                <div className="text-danger">{formErrors.continent}</div>
                        </CardContent>

                        <CardContent>
                            <h3>Description</h3>
                            <Textarea/>
                        </CardContent>

                        <div className='w-full text-right'>
                            <Button type="submit" variant="secondary" className="ml-auto">
                                Submit
                            </Button>
                        </div>


                        {/* <CardFooter>
                            <p>Card Footer</p>
                        </CardFooter> */}
                        </Card>

                    </form>
                        

                    </DialogDescription>
                    </DialogHeader>
                </DialogContent>
        </Dialog>

    </>
  );
}

export default Form;
