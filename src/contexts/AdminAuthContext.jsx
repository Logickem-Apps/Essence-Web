import React, { createContext, useContext, useState, useEffect } from 'react';
import pb from '@/lib/pocketbaseClient.js';

const AdminAuthContext = createContext();

export const useAdminAuth = () => useContext(AdminAuthContext);

export const AdminAuthProvider = ({ children }) => {
  const [currentAdmin, setCurrentAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initial check
    const checkAuth = () => {
      const model = pb.authStore.model;
      if (model && model.role === 'admin') {
        setCurrentAdmin(model);
      } else {
        setCurrentAdmin(null);
      }
      setLoading(false);
    };

    checkAuth();

    // Subscribe to auth changes
    const unsubscribe = pb.authStore.onChange((token, model) => {
      if (model && model.role === 'admin') {
        setCurrentAdmin(model);
      } else {
        setCurrentAdmin(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const login = async (email, password) => {
    try {
      const authData = await pb.collection('users').authWithPassword(email, password, {
        $autoCancel: false,
      });
      
      if (authData.record.role !== 'admin') {
        pb.authStore.clear(); // Clear store if not admin
        setCurrentAdmin(null);
        throw new Error('Acceso denegado. Se requieren permisos de administrador.');
      }
      
      setCurrentAdmin(authData.record);
      return authData;
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    pb.authStore.clear();
    setCurrentAdmin(null);
  };

  const isAdminAuthenticated = !!currentAdmin;

  const value = {
    currentAdmin,
    login,
    logout,
    isAdminAuthenticated,
    loading
  };

  return (
    <AdminAuthContext.Provider value={value}>
      {!loading && children}
    </AdminAuthContext.Provider>
  );
};