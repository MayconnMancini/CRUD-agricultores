CREATE TABLE agricultor (
    id VARCHAR(36) PRIMARY KEY,
    razaoSocial VARCHAR(255) NOT NULL,
    nomeFantasia VARCHAR(255) NOT NULL,
    tipo ENUM('pf', 'pj') NOT NULL DEFAULT 'pj',
    cnpjCpf VARCHAR(255) NOT NULL,
    celular VARCHAR(255),
    cidade VARCHAR(255) NOT NULL,
    estado VARCHAR(255) NOT NULL
);