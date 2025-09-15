-- Create clients table
CREATE TABLE IF NOT EXISTS clients (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create systems table
CREATE TABLE IF NOT EXISTS systems (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id UUID NOT NULL REFERENCES clients(id) ON DELETE CASCADE,
  numero INTEGER NOT NULL,
  nome VARCHAR(255) NOT NULL,
  tipo VARCHAR(100) NOT NULL,
  local VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(client_id, numero)
);

-- Create equipments table
CREATE TABLE IF NOT EXISTS equipments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  system_id UUID NOT NULL REFERENCES systems(id) ON DELETE CASCADE,
  code VARCHAR(100) NOT NULL UNIQUE,
  description VARCHAR(255) NOT NULL,
  fabricante VARCHAR(255),
  modelo VARCHAR(255),
  capacidade VARCHAR(100),
  tipo VARCHAR(100),
  local VARCHAR(255),
  condensacao VARCHAR(50),
  numero_serie VARCHAR(255),
  valvula_solenoide VARCHAR(255),
  valvula_expansao VARCHAR(255),
  compressor VARCHAR(255),
  unidade_comp VARCHAR(100),
  refrigerante VARCHAR(50),
  alimentacao VARCHAR(100),
  ventilador VARCHAR(255),
  vazao_ventilador VARCHAR(100),
  filtro VARCHAR(50),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_systems_client_id ON systems(client_id);
CREATE INDEX IF NOT EXISTS idx_equipments_system_id ON equipments(system_id);
CREATE INDEX IF NOT EXISTS idx_equipments_code ON equipments(code);

-- Enable Row Level Security (RLS)
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE systems ENABLE ROW LEVEL SECURITY;
ALTER TABLE equipments ENABLE ROW LEVEL SECURITY;

-- Create policies for authenticated users
CREATE POLICY "Users can view all clients" ON clients FOR SELECT USING (TRUE);
CREATE POLICY "Users can insert clients" ON clients FOR INSERT WITH CHECK (TRUE);
CREATE POLICY "Users can update clients" ON clients FOR UPDATE USING (TRUE);
CREATE POLICY "Users can delete clients" ON clients FOR DELETE USING (TRUE);

CREATE POLICY "Users can view all systems" ON systems FOR SELECT USING (TRUE);
CREATE POLICY "Users can insert systems" ON systems FOR INSERT WITH CHECK (TRUE);
CREATE POLICY "Users can update systems" ON systems FOR UPDATE USING (TRUE);
CREATE POLICY "Users can delete systems" ON systems FOR DELETE USING (TRUE);

CREATE POLICY "Users can view all equipments" ON equipments FOR SELECT USING (TRUE);
CREATE POLICY "Users can insert equipments" ON equipments FOR INSERT WITH CHECK (TRUE);
CREATE POLICY "Users can update equipments" ON equipments FOR UPDATE USING (TRUE);
CREATE POLICY "Users can delete equipments" ON equipments FOR DELETE USING (TRUE);

-- Insert initial data (Siemens and Modec clients)
INSERT INTO clients (name, description) VALUES 
('Siemens', 'Cliente Siemens - Sistemas industriais'),
('Modec', 'FPSO Bacalhau - Plataforma marítima')
ON CONFLICT DO NOTHING;