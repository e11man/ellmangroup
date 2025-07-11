'use client';

import React from 'react';
import Link from 'next/link';
import { 
  FileText, 
  Edit3, 
  Eye, 
  BarChart3, 
  Users, 
  Settings,
  Plus,
  RefreshCw,
  Layout
} from 'lucide-react';
import { useContent } from '@/hooks/useContent';

export default function AdminDashboard() {
  const { content, loading, refreshContent } = useContent();

  const stats = [
    {
      name: 'Total Content Items',
      value: Object.keys(content).length > 0 ? 
        Object.values(content).reduce((acc: number, section: any) => {
          return acc + Object.keys(section).length;
        }, 0) : 0,
      icon: FileText,
      color: 'bg-blue-500',
    },
    {
      name: 'Active Sections',
      value: Object.keys(content).length,
      icon: Layout,
      color: 'bg-green-500',
    },
    {
      name: 'Last Updated',
      value: 'Just now',
      icon: RefreshCw,
      color: 'bg-purple-500',
    },
  ];

  const quickActions = [
    {
      name: 'Edit Hero Section',
      description: 'Update main headline and call-to-action',
      href: '/admin/content?section=hero',
      icon: Edit3,
      color: 'bg-blue-500',
    },
    {
      name: 'Manage Services',
      description: 'Update service offerings and features',
      href: '/admin/content?section=services',
      icon: Settings,
      color: 'bg-green-500',
    },
    {
      name: 'Edit Navigation',
      description: 'Update menu items and branding',
      href: '/admin/content?section=navigation',
      icon: Layout,
      color: 'bg-purple-500',
    },
    {
      name: 'Preview Site',
      description: 'View the live website',
      href: '/',
      icon: Eye,
      color: 'bg-orange-500',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Manage your website content and settings</p>
        </div>
        <button
          onClick={refreshContent}
          disabled={loading}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50"
        >
          <RefreshCw className={`mr-2 h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
          Refresh
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="relative overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:px-6"
          >
            <dt>
              <div className={`absolute rounded-md p-3 ${stat.color}`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <p className="ml-16 truncate text-sm font-medium text-gray-500">
                {stat.name}
              </p>
            </dt>
            <dd className="ml-16 flex items-baseline">
              <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
            </dd>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickActions.map((action) => (
            <Link
              key={action.name}
              href={action.href}
              className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
            >
              <div className={`flex-shrink-0 rounded-md p-2 ${action.color}`}>
                <action.icon className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="text-sm font-medium text-gray-900">{action.name}</p>
                <p className="text-sm text-gray-500">{action.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h2>
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="text-center text-gray-500">
              <FileText className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">No recent activity</h3>
              <p className="mt-1 text-sm text-gray-500">
                Get started by editing your website content.
              </p>
              <div className="mt-6">
                <Link
                  href="/admin/content"
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  <Plus className="-ml-1 mr-2 h-5 w-5" />
                  Manage Content
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}