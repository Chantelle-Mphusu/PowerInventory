import React, {useState} from 'react'
import axios from 'axios'

const Categories = () => {

    const [categoryName, setCategoryName] = useState('');
    const [categoryDescription, setCategoryDescription] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post('/http://localhost:3000/api/categories/add', {
            categoryName,categoryDescription},
            {
                headers: {
                    Authorization : `Bearer ${localStorage.getItem('pos-token')}`,
                    'Content-Type': 'application/json'
                }
            }
        )
        const data = await response.json()
        if(response.data.success){
            alert("Category added successfully")
            setCategoryName('')
            setCategoryDescription('')
        }else{
            console.error("Failed to add category", data)
            alert("Failed to add category")
        }
    }



    return (
    <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        Category Management
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Add Category Form */}
        <div className="bg-white shadow-lg rounded-2xl p-6 border border-purple-200">
          <h2 className="text-xl font-semibold text-purple-700 mb-4">
            Add Category
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Category Name"
                onChange={(e) => setCategoryName(e.target.value)}
                className="w-full border border-blue-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Category Description"
                onChange={(e) => setCategoryDescription(e.target.value)}
                className="w-full border border-blue-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-2 rounded-lg shadow hover:from-blue-700 hover:to-purple-700 transition duration-200"
            >
              Add Category
            </button>
          </form>
        </div>

        {/* Existing Categories List */}
        <div className="bg-white shadow-lg rounded-2xl p-6 border border-blue-200">
          <h2 className="text-xl font-semibold text-blue-700 mb-4">
            Existing Categories
          </h2>
          <p className="text-gray-500">No categories yet.</p>
        </div>
      </div>
    </div>
  )
}

export default Categories
