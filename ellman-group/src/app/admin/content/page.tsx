'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { 
  FileText, 
  Edit3, 
  Save, 
  X, 
  Plus,
  Trash2,
  Eye,
  Check,
  AlertCircle
} from 'lucide-react';
import { useContent } from '@/hooks/useContent';

const sections = [
  { id: 'header', name: 'Header & Navigation', icon: FileText },
  { id: 'hero', name: 'Hero Section', icon: Eye },
  { id: 'services', name: 'Services', icon: Edit3 },
  { id: 'about', name: 'About', icon: FileText },
  { id: 'process', name: 'Process', icon: Edit3 },
  { id: 'contact', name: 'Contact', icon: FileText },
  { id: 'footer', name: 'Footer', icon: FileText },
];

interface ContentItem {
  _id: string;
  section: string;
  subsection?: string;
  key: string;
  value: string;
  type: string;
  order: number;
  isActive: boolean;
}

export default function ContentManagement() {
  const searchParams = useSearchParams();
  const { content, loading, refreshContent } = useContent();
  const [activeTab, setActiveTab] = useState(searchParams.get('section') || 'header');
  const [editingItem, setEditingItem] = useState<ContentItem | null>(null);
  const [editValue, setEditValue] = useState('');
  const [saving, setSaving] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newItem, setNewItem] = useState({
    section: activeTab,
    subsection: '',
    key: '',
    value: '',
    type: 'text'
  });

  useEffect(() => {
    const section = searchParams.get('section');
    if (section) {
      setActiveTab(section);
    }
  }, [searchParams]);

  const handleEdit = (item: ContentItem) => {
    setEditingItem(item);
    setEditValue(item.value);
  };

  const handleSave = async () => {
    if (!editingItem) return;

    setSaving(true);
    try {
      const response = await fetch(`/api/content/${editingItem._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...editingItem,
          value: editValue,
        }),
      });

      if (response.ok) {
        await refreshContent();
        setEditingItem(null);
        setEditValue('');
      } else {
        throw new Error('Failed to update content');
      }
    } catch (error) {
      console.error('Error updating content:', error);
      alert('Failed to update content');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (item: ContentItem) => {
    if (!confirm('Are you sure you want to delete this content item?')) return;

    try {
      const response = await fetch(`/api/content/${item._id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        await refreshContent();
      } else {
        throw new Error('Failed to delete content');
      }
    } catch (error) {
      console.error('Error deleting content:', error);
      alert('Failed to delete content');
    }
  };

  const handleAdd = async () => {
    if (!newItem.key || !newItem.value) {
      alert('Please fill in all required fields');
      return;
    }

    setSaving(true);
    try {
      const response = await fetch('/api/content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItem),
      });

      if (response.ok) {
        await refreshContent();
        setShowAddForm(false);
        setNewItem({
          section: activeTab,
          subsection: '',
          key: '',
          value: '',
          type: 'text'
        });
      } else {
        throw new Error('Failed to create content');
      }
    } catch (error) {
      console.error('Error creating content:', error);
      alert('Failed to create content');
    } finally {
      setSaving(false);
    }
  };

  const getSectionContent = (sectionId: string) => {
    const sectionContent = content[sectionId];
    if (!sectionContent) return [];

    const items: ContentItem[] = [];
    
    Object.entries(sectionContent as Record<string, any>).forEach(([key, value]) => {
      if (typeof value === 'object' && value !== null) {
        // Subsection content
        Object.entries(value as Record<string, any>).forEach(([subKey, subValue]) => {
          items.push({
            _id: `${sectionId}-${key}-${subKey}`,
            section: sectionId,
            subsection: key,
            key: subKey,
            value: subValue as string,
            type: 'text',
            order: 0,
            isActive: true
          });
        });
      } else {
        // Direct section content
        items.push({
          _id: `${sectionId}-${key}`,
          section: sectionId,
          key,
          value: value as string,
          type: 'text',
          order: 0,
          isActive: true
        });
      }
    });

    return items.sort((a, b) => a.order - b.order);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Content Management</h1>
          <p className="text-gray-600">Edit and manage your website content</p>
        </div>
        <button
          onClick={() => setShowAddForm(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Content
        </button>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveTab(section.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === section.id
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <section.icon className="inline-block w-4 h-4 mr-2" />
              {section.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Content List */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          {loading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mx-auto"></div>
              <p className="mt-2 text-sm text-gray-500">Loading content...</p>
            </div>
          ) : (
            <div className="space-y-4">
              {getSectionContent(activeTab).map((item) => (
                <div
                  key={item._id}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-gray-900">
                        {item.subsection ? `${item.subsection}.${item.key}` : item.key}
                      </span>
                      <span className="text-xs text-gray-500">({item.type})</span>
                    </div>
                    {editingItem?._id === item._id ? (
                      <div className="mt-2">
                        <textarea
                          value={editValue}
                          onChange={(e) => setEditValue(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                          rows={3}
                        />
                        <div className="mt-2 flex space-x-2">
                          <button
                            onClick={handleSave}
                            disabled={saving}
                            className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 disabled:opacity-50"
                          >
                            <Save className="w-4 h-4 mr-1" />
                            Save
                          </button>
                          <button
                            onClick={() => {
                              setEditingItem(null);
                              setEditValue('');
                            }}
                            className="inline-flex items-center px-3 py-1 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                          >
                            <X className="w-4 h-4 mr-1" />
                            Cancel
                          </button>
                        </div>
                      </div>
                    ) : (
                      <p className="mt-1 text-sm text-gray-600">{item.value}</p>
                    )}
                  </div>
                  {editingItem?._id !== item._id && (
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEdit(item)}
                        className="inline-flex items-center px-3 py-1 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                      >
                        <Edit3 className="w-4 h-4 mr-1" />
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(item)}
                        className="inline-flex items-center px-3 py-1 border border-red-300 text-sm font-medium rounded-md text-red-700 bg-white hover:bg-red-50"
                      >
                        <Trash2 className="w-4 h-4 mr-1" />
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              ))}
              
              {getSectionContent(activeTab).length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  <FileText className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-sm font-medium text-gray-900">No content found</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Get started by adding content to this section.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Add Content Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Add New Content</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Section</label>
                  <select
                    value={newItem.section}
                    onChange={(e) => setNewItem({ ...newItem, section: e.target.value })}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    {sections.map((section) => (
                      <option key={section.id} value={section.id}>
                        {section.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Subsection (optional)</label>
                  <input
                    type="text"
                    value={newItem.subsection}
                    onChange={(e) => setNewItem({ ...newItem, subsection: e.target.value })}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="e.g., nav, cta, features"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Key</label>
                  <input
                    type="text"
                    value={newItem.key}
                    onChange={(e) => setNewItem({ ...newItem, key: e.target.value })}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="e.g., title, description, button"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Value</label>
                  <textarea
                    value={newItem.value}
                    onChange={(e) => setNewItem({ ...newItem, value: e.target.value })}
                    rows={3}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Enter the content value"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Type</label>
                  <select
                    value={newItem.type}
                    onChange={(e) => setNewItem({ ...newItem, type: e.target.value })}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="text">Text</option>
                    <option value="title">Title</option>
                    <option value="description">Description</option>
                    <option value="button">Button</option>
                    <option value="badge">Badge</option>
                    <option value="feature">Feature</option>
                    <option value="stat">Stat</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  onClick={() => setShowAddForm(false)}
                  className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAdd}
                  disabled={saving}
                  className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 disabled:opacity-50"
                >
                  {saving ? 'Adding...' : 'Add Content'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}