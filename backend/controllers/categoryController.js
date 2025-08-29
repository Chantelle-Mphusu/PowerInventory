import Category from '../Models/Category.js';


const addCategory = async (req, res) => {
    try{
        const {categoryName, categoryDescription} = req.body;
       

        const existingCategory = await Category.findOne({
            name: categoryName
        }); 
        if(existingCategory){
            return res.status(400).json({message: "Category already exists"});
        }

        //Create new category
        const newCategory = new Category({
            categoryName,
           categoryDescription,   
            
        });
        await newCategory.save();
        res.status(201).json({success: true, message: "Category created successfully"});    
    }catch(error){
        console.error("Error in adding category", error);
        res.status(500).json({success:false, message: "Something went wrong"});
    }

}

export { addCategory };