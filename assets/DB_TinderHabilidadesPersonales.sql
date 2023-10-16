-- This script was generated by the ERD tool in pgAdmin 4.
-- Please log an issue at https://redmine.postgresql.org/projects/pgadmin4/issues/new if you find any bugs, including reproduction steps.
BEGIN;


CREATE TABLE IF NOT EXISTS public.calificaciones
(
    id_calificacion integer NOT NULL DEFAULT nextval('calificaciones_id_calificacion_seq'::regclass),
    id_usuario_recibe_calificacion integer,
    id_usuario_otorga_calificacion integer,
    puntuacion integer NOT NULL,
    comentario text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT calificaciones_pkey PRIMARY KEY (id_calificacion)
);

CREATE TABLE IF NOT EXISTS public.estados
(
    id_estado integer NOT NULL DEFAULT nextval('estados_id_estado_seq'::regclass),
    nombre_estado character varying(50) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT estados_pkey PRIMARY KEY (id_estado)
);

CREATE TABLE IF NOT EXISTS public.habilidades
(
    id_habilidad integer NOT NULL DEFAULT nextval('habilidades_id_habilidad_seq'::regclass),
    nombre_habilidad character varying(50) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT habilidades_pkey PRIMARY KEY (id_habilidad)
);

CREATE TABLE IF NOT EXISTS public.personas
(
    id_persona integer NOT NULL DEFAULT nextval('personas_id_persona_seq'::regclass),
    nombre_completo character varying(100) COLLATE pg_catalog."default" NOT NULL,
    apellido_completo character varying(100) COLLATE pg_catalog."default" NOT NULL,
    direccion character varying(100) COLLATE pg_catalog."default" NOT NULL,
    telefono integer NOT NULL,
    estado boolean NOT NULL,
    CONSTRAINT personas_pkey PRIMARY KEY (id_persona)
);

CREATE TABLE IF NOT EXISTS public.roles
(
    id_rol integer NOT NULL DEFAULT nextval('roles_id_rol_seq'::regclass),
    nombre_rol character varying(50) COLLATE pg_catalog."default" NOT NULL,
    estado boolean NOT NULL,
    CONSTRAINT roles_pkey PRIMARY KEY (id_rol)
);

CREATE TABLE IF NOT EXISTS public.servicios
(
    id_servicio integer NOT NULL DEFAULT nextval('servicios_id_servicio_seq'::regclass),
    id_usuario_ofrece_servicio integer,
    id_habilidad_requerida integer,
    tarifa_por_hora numeric(8, 2) NOT NULL,
    disponibilidad timestamp without time zone NOT NULL,
    ubicacion character varying(100) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT servicios_pkey PRIMARY KEY (id_servicio)
);

CREATE TABLE IF NOT EXISTS public.trabajos
(
    id_trabajo integer NOT NULL DEFAULT nextval('trabajos_id_trabajo_seq'::regclass),
    id_usuario_contrata integer,
    id_usuario_ofrece_servicio integer,
    duracion_trabajo integer NOT NULL,
    fecha_inicio timestamp without time zone NOT NULL,
    estado_trabajo character varying(20) COLLATE pg_catalog."default" NOT NULL,
    id_estado integer,
    CONSTRAINT trabajos_pkey PRIMARY KEY (id_trabajo)
);

CREATE TABLE IF NOT EXISTS public.usuarios
(
    id_usuario integer NOT NULL DEFAULT nextval('usuarios_id_usuario_seq'::regclass),
    id_persona integer,
    usuario character varying(50) COLLATE pg_catalog."default" NOT NULL,
    contrasena character varying(100) COLLATE pg_catalog."default" NOT NULL,
    correo_electronico character varying(100) COLLATE pg_catalog."default" NOT NULL,
    id_rol integer,
    estado boolean NOT NULL,
    CONSTRAINT usuarios_pkey PRIMARY KEY (id_usuario)
);

ALTER TABLE IF EXISTS public.calificaciones
    ADD CONSTRAINT calificaciones_id_usuario_otorga_calificacion_fkey FOREIGN KEY (id_usuario_otorga_calificacion)
    REFERENCES public.usuarios (id_usuario) MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE CASCADE;


ALTER TABLE IF EXISTS public.calificaciones
    ADD CONSTRAINT calificaciones_id_usuario_recibe_calificacion_fkey FOREIGN KEY (id_usuario_recibe_calificacion)
    REFERENCES public.usuarios (id_usuario) MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE CASCADE;


ALTER TABLE IF EXISTS public.servicios
    ADD CONSTRAINT servicios_id_habilidad_requerida_fkey FOREIGN KEY (id_habilidad_requerida)
    REFERENCES public.habilidades (id_habilidad) MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE CASCADE;


ALTER TABLE IF EXISTS public.servicios
    ADD CONSTRAINT servicios_id_usuario_ofrece_servicio_fkey FOREIGN KEY (id_usuario_ofrece_servicio)
    REFERENCES public.usuarios (id_usuario) MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE CASCADE;


ALTER TABLE IF EXISTS public.trabajos
    ADD CONSTRAINT trabajos_id_estado_fkey FOREIGN KEY (id_estado)
    REFERENCES public.estados (id_estado) MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE CASCADE;


ALTER TABLE IF EXISTS public.trabajos
    ADD CONSTRAINT trabajos_id_usuario_contrata_fkey FOREIGN KEY (id_usuario_contrata)
    REFERENCES public.usuarios (id_usuario) MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE CASCADE;


ALTER TABLE IF EXISTS public.trabajos
    ADD CONSTRAINT trabajos_id_usuario_ofrece_servicio_fkey FOREIGN KEY (id_usuario_ofrece_servicio)
    REFERENCES public.usuarios (id_usuario) MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE CASCADE;


ALTER TABLE IF EXISTS public.usuarios
    ADD CONSTRAINT usuarios_id_persona_fkey FOREIGN KEY (id_persona)
    REFERENCES public.personas (id_persona) MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE CASCADE;


ALTER TABLE IF EXISTS public.usuarios
    ADD CONSTRAINT usuarios_id_rol_fkey FOREIGN KEY (id_rol)
    REFERENCES public.roles (id_rol) MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE CASCADE;

END;