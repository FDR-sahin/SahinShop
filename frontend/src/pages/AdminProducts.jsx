

import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/api/products";

const emptyForm = {
  product_name: "",
  category: "",
  brand: "",
  unit_price: "",
  stock_quantity: "",
  discount: "",
  product_status: "Active",
};

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState(emptyForm);
  const [loading, setLoading] = useState(false);
  const [editId, setEditId] = useState(null);

  // ===============================
  // GET PRODUCTS
  // ===============================
  const getProducts = async () => {
    try {
      const response = await axios.get(API_URL);
      if (response.data.success) {
        setProducts(response.data.products);
      }
    } catch (error) {
      console.log(error);
      alert("Products load failed");
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  // ===============================
  // INPUT CHANGE
  // ===============================
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // ===============================
  // FORM VALIDATION
  // ===============================
  const validateForm = () => {
    if (!formData.product_name.trim()) {
      alert("Product name is required");
      return false;
    }
    if (formData.unit_price === "") {
      alert("Unit price is required");
      return false;
    }
    if (Number(formData.unit_price) < 0) {
      alert("Unit price cannot be negative");
      return false;
    }
    if (formData.stock_quantity === "") {
      alert("Stock quantity is required");
      return false;
    }
    if (Number(formData.stock_quantity) < 0) {
      alert("Stock quantity cannot be negative");
      return false;
    }
    if (formData.discount !== "" && Number(formData.discount) < 0) {
      alert("Discount cannot be negative");
      return false;
    }
    return true;
  };

  // ===============================
  // ADD / UPDATE PRODUCT
  // ===============================
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      setLoading(true);
      const data = {
        ...formData,
        unit_price: Number(formData.unit_price),
        stock_quantity: Number(formData.stock_quantity),
        discount: formData.discount === "" ? 0 : Number(formData.discount),
      };

      if (editId) {
        const response = await axios.put(`${API_URL}/${editId}`, data);
        if (response.data.success) {
          alert("Product updated successfully");
          setFormData(emptyForm);
          setEditId(null);
          getProducts();
        }
      } else {
        const response = await axios.post(API_URL, data);
        if (response.data.success) {
          alert("Product added successfully");
          setFormData(emptyForm);
          getProducts();
        }
      }
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // ===============================
  // EDIT BUTTON
  // ===============================
  const handleEdit = (product) => {
    setEditId(product.product_id);
    setFormData({
      product_name: product.product_name || "",
      category: product.category || "",
      brand: product.brand || "",
      unit_price: product.unit_price || "",
      stock_quantity: product.stock_quantity || "",
      discount: product.discount || "",
      product_status: product.product_status || "Active",
    });
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // ===============================
  // CANCEL EDIT
  // ===============================
  const handleCancelEdit = () => {
    setEditId(null);
    setFormData(emptyForm);
  };

  // ===============================
  // DELETE PRODUCT
  // ===============================
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?",
    );
    if (!confirmDelete) return;

    try {
      const response = await axios.delete(`${API_URL}/${id}`);
      if (response.data.success) {
        alert("Product deleted successfully");
        getProducts();
      }
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || "Product delete failed");
    }
  };

  // ===============================
  // RENDER - আপগ্রেডেড ডিজাইন
  // ===============================
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30 p-4 md:p-8">
      <div className="mx-auto max-w-7xl">
        {/* ================================= */}
        {/* HEADER - প্রফেশনাল */}
        {/* ================================= */}
        <div className="mb-8 flex flex-col items-start justify-between gap-4 rounded-2xl bg-white/80 p-6 shadow-xl shadow-blue-500/5 backdrop-blur-sm md:flex-row md:items-center">
          <div>
            <h1 className="flex items-center gap-3 text-3xl font-extrabold text-slate-800">
              <span className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 p-2 text-white shadow-lg shadow-blue-500/30">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </span>
              Sahin Shop
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              <span className="inline-flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-green-400"></span>
                Manage your products effortlessly
              </span>
            </p>
          </div>
          <div className="flex items-center gap-3 rounded-full bg-blue-50 px-4 py-2 text-sm text-blue-700">
            <span className="font-semibold">{products.length}</span>
            <span className="text-slate-400">|</span>
            <span>Total Products</span>
          </div>
        </div>

        {/* ================================= */}
        {/* PRODUCT FORM - কার্ড ডিজাইন */}
        {/* ================================= */}
        <div className="overflow-hidden rounded-2xl border border-white/50 bg-white shadow-2xl shadow-blue-500/10 transition-all hover:shadow-blue-500/20">
          <div className="border-b border-slate-100 bg-gradient-to-r from-slate-50 to-blue-50/50 px-6 py-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div
                  className={`rounded-lg p-2 ${editId ? "bg-orange-100 text-orange-600" : "bg-blue-100 text-blue-600"}`}
                >
                  {editId ? (
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  )}
                </div>
                <h2 className="text-xl font-bold text-slate-800">
                  {editId ? "Update Product" : "Add New Product"}
                </h2>
                {editId && (
                  <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700">
                    Editing #{editId}
                  </span>
                )}
              </div>
              {editId && (
                <button
                  type="button"
                  onClick={handleCancelEdit}
                  className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600 transition-all hover:bg-slate-200 hover:text-slate-800"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  Cancel
                </button>
              )}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {/* Product Name */}
              <div className="md:col-span-2">
                <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                  Product Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="product_name"
                  value={formData.product_name}
                  onChange={handleChange}
                  placeholder="Enter product name..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                />
              </div>

              {/* Category */}
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                  Category
                </label>
                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  placeholder="e.g. Electronics"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                />
              </div>

              {/* Brand */}
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                  Brand
                </label>
                <input
                  type="text"
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  placeholder="e.g. Samsung"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                />
              </div>

              {/* Unit Price */}
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                  Unit Price <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                    ৳
                  </span>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    name="unit_price"
                    value={formData.unit_price}
                    onChange={handleChange}
                    placeholder="0.00"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-8 pr-4 py-3 text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>
              </div>

              {/* Stock */}
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                  Stock Quantity <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  min="0"
                  name="stock_quantity"
                  value={formData.stock_quantity}
                  onChange={handleChange}
                  placeholder="Enter stock"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                />
              </div>

              {/* Discount */}
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                  Discount (%)
                </label>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  name="discount"
                  value={formData.discount}
                  onChange={handleChange}
                  placeholder="0"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                />
              </div>

              {/* Status */}
              <div className="lg:col-span-3">
                <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                  Product Status
                </label>
                <div className="flex flex-wrap gap-3">
                  {["Active", "Inactive"].map((status) => (
                    <label
                      key={status}
                      className={`cursor-pointer rounded-xl border-2 px-6 py-2.5 text-sm font-medium transition-all ${
                        formData.product_status === status
                          ? status === "Active"
                            ? "border-green-500 bg-green-50 text-green-700 shadow-sm shadow-green-500/20"
                            : "border-red-500 bg-red-50 text-red-700 shadow-sm shadow-red-500/20"
                          : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name="product_status"
                        value={status}
                        checked={formData.product_status === status}
                        onChange={handleChange}
                        className="hidden"
                      />
                      <span className="flex items-center gap-2">
                        <span
                          className={`h-2 w-2 rounded-full ${status === "Active" ? "bg-green-500" : "bg-red-500"}`}
                        ></span>
                        {status}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-wrap gap-3 border-t border-slate-100 pt-6">
              <button
                type="submit"
                disabled={loading}
                className={`inline-flex items-center gap-2 rounded-xl px-8 py-3.5 font-bold text-white shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl disabled:opacity-50 disabled:hover:scale-100 ${
                  editId
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 shadow-orange-500/30 hover:from-orange-600 hover:to-orange-700"
                    : "bg-gradient-to-r from-blue-600 to-indigo-600 shadow-blue-500/30 hover:from-blue-700 hover:to-indigo-700"
                }`}
              >
                {loading ? (
                  <>
                    <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Processing...
                  </>
                ) : editId ? (
                  <>
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Update Product
                  </>
                ) : (
                  <>
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                    Add Product
                  </>
                )}
              </button>

              {editId && (
                <button
                  type="button"
                  onClick={handleCancelEdit}
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-8 py-3.5 font-medium text-slate-600 transition-all hover:bg-slate-50"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* ================================= */}
        {/* PRODUCT TABLE - মডার্ন */}
        {/* ================================= */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-white/50 bg-white shadow-2xl shadow-blue-500/10">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-blue-50/50 px-6 py-4">
            <div>
              <h2 className="text-xl font-bold text-slate-800">All Products</h2>
              <p className="text-sm text-slate-500">
                Showing {products.length} products
              </p>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm text-blue-700">
              <span className="font-bold">{products.length}</span>
              <span>items</span>
            </div>
          </div>

          <div className="overflow-x-auto p-4">
            <table className="w-full min-w-[1050px]">
              <thead>
                <tr className="rounded-xl bg-slate-50 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                  <th className="px-4 py-4">ID</th>
                  <th className="px-4 py-4">Product</th>
                  <th className="px-4 py-4">Category</th>
                  <th className="px-4 py-4">Brand</th>
                  <th className="px-4 py-4 text-right">Price</th>
                  <th className="px-4 py-4 text-right">Stock</th>
                  <th className="px-4 py-4 text-right">Discount</th>
                  <th className="px-4 py-4">Status</th>
                  <th className="px-4 py-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {products.length === 0 ? (
                  <tr>
                    <td colSpan="9" className="px-4 py-16 text-center">
                      <div className="flex flex-col items-center gap-3 text-slate-400">
                        <svg
                          className="h-12 w-12"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                          />
                        </svg>
                        <span className="text-sm font-medium">
                          No products found
                        </span>
                        <span className="text-xs">
                          Add your first product above
                        </span>
                      </div>
                    </td>
                  </tr>
                ) : (
                  products.map((product) => (
                    <tr
                      key={product.product_id}
                      className="transition-colors hover:bg-blue-50/40"
                    >
                      <td className="px-4 py-4 text-sm font-bold text-slate-400">
                        #{product.product_id}
                      </td>
                      <td className="px-4 py-4 text-sm font-semibold text-slate-800">
                        {product.product_name}
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-600">
                        {product.category || (
                          <span className="text-slate-300">—</span>
                        )}
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-600">
                        {product.brand || (
                          <span className="text-slate-300">—</span>
                        )}
                      </td>
                      <td className="px-4 py-4 text-right text-sm font-bold text-slate-800">
                        ৳{Number(product.unit_price).toFixed(2)}
                      </td>
                      <td className="px-4 py-4 text-right text-sm">
                        <span
                          className={`font-medium ${product.stock_quantity < 5 ? "text-red-500" : "text-slate-700"}`}
                        >
                          {product.stock_quantity}
                        </span>
                        {product.stock_quantity < 5 &&
                          product.stock_quantity > 0 && (
                            <span className="ml-1.5 text-[10px] font-medium text-red-400">
                              Low
                            </span>
                          )}
                        {product.stock_quantity === 0 && (
                          <span className="ml-1.5 text-[10px] font-medium text-red-400">
                            Out
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-4 text-right text-sm text-slate-600">
                        {Number(product.discount).toFixed(2)}%
                      </td>
                      <td className="px-4 py-4">
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${
                            product.product_status === "Active"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${product.product_status === "Active" ? "bg-green-500" : "bg-red-500"}`}
                          ></span>
                          {product.product_status}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center justify-center gap-2">
                          <button
                            onClick={() => handleEdit(product)}
                            className="rounded-lg bg-blue-50 px-3.5 py-2 text-sm font-semibold text-blue-600 transition-all hover:bg-blue-100 hover:shadow-sm"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(product.product_id)}
                            className="rounded-lg bg-red-50 px-3.5 py-2 text-sm font-semibold text-red-600 transition-all hover:bg-red-100 hover:shadow-sm"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;
