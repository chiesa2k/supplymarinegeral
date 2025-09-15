import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface Client {
  id: string
  name: string
  description?: string
  created_at: string
  updated_at: string
}

export interface System {
  id: string
  client_id: string
  numero: number
  nome: string
  tipo: string
  local: string
  created_at: string
  updated_at: string
}

export interface Equipment {
  id: string
  system_id: string
  code: string
  description: string
  fabricante?: string
  modelo?: string
  capacidade?: string
  tipo?: string
  local?: string
  condensacao?: string
  numero_serie?: string
  valvula_solenoide?: string
  valvula_expansao?: string
  compressor?: string
  unidade_comp?: string
  refrigerante?: string
  alimentacao?: string
  ventilador?: string
  vazao_ventilador?: string
  filtro?: string
  created_at: string
  updated_at: string
}