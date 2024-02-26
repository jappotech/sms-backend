--
-- PostgreSQL database dump
--

-- Dumped from database version 14.9 (Homebrew)
-- Dumped by pg_dump version 14.9 (Homebrew)

--
-- Data for Name: Account; Type: TABLE DATA; Schema: public; Owner: macbookpro
--

COPY public."Account" (id, uid, "createdAt", "updatedAt", username, password, roles, "isActive", "userId") FROM stdin;
1	3d7a48b9-6d22-49b3-a0c0-5c31d547e3a6	2024-02-07 21:04:45.777	2024-02-07 21:04:45.778	you234	$2b$10$x7SPAGxp0KguX2LnHpFRnuR0BeVcF7nJzM9t4YdnvQCiLsNSj4s8W	{PROFESSEUR}	t	1
2	fc625cbe-7434-47a1-85d1-e383622748f5	2024-02-07 21:05:11.708	2024-02-07 21:05:11.709	habib36	$2b$10$2MEElOPoZPYIMaVn3JfTie9ss/EZw4iu8o6Aw/vJ3ngho0m29Qr.a	{PROFESSEUR}	t	2
3	e47b1f02-982a-481e-b26d-d176637500ae	2024-02-07 21:15:39.757	2024-02-07 21:15:39.759	binette	$2b$10$zNu8vo4H0pJaF3v7wzJj/.X7hquLHSmwPevuNjkno8cBbk3GcJsXm	{ETUDIANT}	t	3
4	8459b408-2688-48fb-9337-47ebccac8bd6	2024-02-07 21:16:06.343	2024-02-07 21:16:06.344	alioune4	$2b$10$X6o08qxywzk4hLSP63nnMuCVkW61Pj94MUwr3Wf9fAiPO4Qx26/rG	{ETUDIANT}	t	4
5	66c04861-7211-4952-9cc7-ebd49d41e8fa	2024-02-07 21:16:23.546	2024-02-07 21:16:23.547	amadou7	$2b$10$eEO6Kx8mFK7ajPjHMSACQu./VU.LesBbQnTuVJy/GNXSMxD65zWvq	{ETUDIANT}	t	5
6	16e918c3-9767-4a7e-b693-8d9414a9fa2b	2024-02-13 15:33:48.813	2024-02-13 15:33:48.814	jpp	$2b$10$Kv13RsEMbVA7NeQ4ML1zE.hCDGBwyH6fzlC4.Zwz2fiOWpIZ3LHam	{ETUDIANT}	t	6
7	ed3bfe4e-a2d8-40ce-a832-b3dd78a7c5ed	2024-02-15 09:13:21.569	2024-02-15 09:13:21.573	fatou5	$2b$10$Qft5O1.gLQjj1zzn9VxhxOr/m7QP71VgpgiLKD5NG9XX4R60mXm3e	{ETUDIANT}	t	7
\.


--
-- Data for Name: Adresse; Type: TABLE DATA; Schema: public; Owner: macbookpro
--

COPY public."Adresse" (id, pays, region, ville, "codePostal", geolocalisation) FROM stdin;
\.


--
-- Data for Name: AnneeScolaire; Type: TABLE DATA; Schema: public; Owner: macbookpro
--

COPY public."AnneeScolaire" (id, "createdAt", "updatedAt", "dateDebut", "dateFin", nom) FROM stdin;
9	2024-02-09 17:13:22.348	2024-02-16 20:45:17.327	2023	2024	2023/2024
10	2024-02-19 14:40:41.638	2024-02-19 14:40:13.34	2024	2025	2024/2025
\.


--
-- Data for Name: Classe; Type: TABLE DATA; Schema: public; Owner: macbookpro
--

COPY public."Classe" (id, "createdAt", "updatedAt", nom, code, niveau, "etablissementId", "specialiteId", "anneeScolaireId") FROM stdin;
4	2024-02-13 12:09:36.056	2024-02-16 20:16:17.906	Licence1 COMMERCE INTERNATIONAL\t	Licence13undefined	Licence1	1	3	9
1	2024-02-07 20:55:58.836	2024-02-16 20:44:06.187	Licence1 Génie Logiciel	Licence11undefined	Licence1	1	1	9
2	2024-02-07 20:56:06.691	2024-02-16 20:44:06.187	Licence2 Génie Logiciel	Licence21undefined	Licence2	1	1	9
3	2024-02-07 20:56:11.47	2024-02-16 20:44:06.187	Licence3 Génie Logiciel	Licence31undefined	Licence3	1	1	9
5	2024-02-16 11:44:52.566	2024-02-16 20:44:06.187	Licence2 COMMERCE INTERNATIONAL	Licence23undefined	Licence2	1	3	9
8	2024-02-19 12:02:02.355	2024-02-19 12:02:02.355	Licence3 COMMERCE INTERNATIONAL	Licence339	Licence3	1	3	9
\.


--
-- Data for Name: Contact; Type: TABLE DATA; Schema: public; Owner: macbookpro
--

COPY public."Contact" (id, "createdAt", "updatedAt", telephone, fix, fax, email, "siteWeb") FROM stdin;
\.


--
-- Data for Name: Cours; Type: TABLE DATA; Schema: public; Owner: macbookpro
--

COPY public."Cours" (id, "createdAt", "updatedAt", nom, description, "dateDebut", "dateFin", "heureDebut", "heureFin", "matiereId", "salleId", "classeId", "professeurId") FROM stdin;
1	2024-02-07 21:06:38.545	2024-02-07 21:06:38.545	HTML		2024-02-08 21:06:00	2024-02-22 21:06:00	2024-02-09 21:06:00	2024-02-23 21:06:00	1	\N	1	1
6	2024-02-15 16:22:29.091	2024-02-15 16:19:58.132	Ec GEnerale	\N	1970-01-01 00:00:00	1970-01-01 00:00:00	1970-01-01 00:00:00	1970-01-01 00:00:00	3	\N	4	1
8	2024-02-15 16:29:24.099	2024-02-15 16:28:31.806	compta generale	\N	1970-01-01 00:00:00	1970-01-01 00:00:00	1970-01-01 00:00:00	1970-01-01 00:00:00	8	\N	4	2
9	2024-02-15 16:34:06.014	2024-02-15 16:33:24.576	math finance	\N	1970-01-01 00:00:00	1970-01-01 00:00:00	1970-01-01 00:00:00	1970-01-01 00:00:00	9	\N	4	2
10	2024-02-15 16:36:59.946	2024-02-15 16:36:14.826	ESta descriptive	\N	1970-01-01 00:00:00	1970-01-01 00:00:00	1970-01-01 00:00:00	1970-01-01 00:00:00	10	\N	4	1
12	2024-02-15 16:42:49.132	2024-02-15 16:42:13.838	Etude de marché	\N	1970-01-01 00:00:00	1970-01-01 00:00:00	1970-01-01 00:00:00	1970-01-01 00:00:00	12	\N	4	2
13	2024-02-15 16:45:02.493	2024-02-15 16:45:28.893	 Introduction au commerce Inter	\N	1970-01-01 00:00:00	1970-01-01 00:00:00	1970-01-01 00:00:00	1970-01-01 00:00:00	13	\N	4	1
14	2024-02-15 16:48:03.965	2024-02-15 16:47:14.842	Techniques douanières 1	\N	1970-01-01 00:00:00	1970-01-01 00:00:00	1970-01-01 00:00:00	1970-01-01 00:00:00	14	\N	4	2
7	2024-02-15 16:24:32.598	2024-02-16 17:48:00.828	Geo ECO	\N	1970-01-01 00:00:00	1970-01-01 00:00:00	1970-01-01 00:00:00	1970-01-01 00:00:00	4	\N	4	1
5	2024-02-15 16:11:48.031	2024-02-16 17:48:00.828	cour ANG AFF	\N	1970-01-01 00:00:00	1970-01-01 00:00:00	1970-01-01 00:00:00	1970-01-01 00:00:00	7	\N	4	2
11	2024-02-15 16:39:51.251	2024-02-16 17:48:00.828	Marketing fondemental	\N	1970-01-01 00:00:00	1970-01-01 00:00:00	1970-01-01 00:00:00	1970-01-01 00:00:00	11	\N	4	1
2	2024-02-13 13:38:10.555	2024-02-16 20:12:10.328	Tc		2024-02-12 13:37:00	2024-02-22 13:37:00	2024-02-12 13:37:00	2024-02-22 13:38:00	5	\N	4	1
3	2024-02-13 14:02:33.556	2024-02-16 20:12:46.577	Introduction au droit		2024-02-14 14:02:00	2024-02-21 14:02:00	2024-02-14 14:02:00	2024-02-21 14:02:00	2	\N	4	2
4	2024-02-15 16:05:52.767	2024-02-16 20:12:56.334	TEF		1970-01-01 00:00:00	1970-01-01 00:00:00	1970-01-01 00:00:00	1970-01-01 00:00:00	6	\N	4	1
18	2024-02-21 13:07:36.258	2024-02-21 14:00:51.44	 Cours Semestres2		2024-02-02 13:06:00	2024-02-16 13:07:00	2024-02-13 13:07:00	2024-02-08 13:07:00	\N	\N	4	\N
\.


--
-- Data for Name: Diplome; Type: TABLE DATA; Schema: public; Owner: macbookpro
--

COPY public."Diplome" (id, "createdAt", "updatedAt", nom, finalite, entite, habilitation, partenaires, "dateCreation", "dateHabilitation", "dateEcheance", duree, "specialiteId") FROM stdin;
1	2024-02-07 20:24:35.468	2024-02-07 20:24:35.468	LICENCE_GENERALE	finalite	entite	habili	\N	2016-06-01 22:41:36	2016-06-01 22:41:36	2016-06-01 22:41:36	5	\N
2	2024-02-07 20:24:49.667	2024-02-07 20:24:49.667	 LICENCE_PROFESSIONNELLE	finalite	entite	habili	\N	2016-06-01 22:41:36	2016-06-01 22:41:36	2016-06-01 22:41:36	5	\N
3	2024-02-07 20:25:03.518	2024-02-07 20:25:03.518	MASTER_PROFESSIONNEL	finalite	entite	habili	\N	2016-06-01 22:41:36	2016-06-01 22:41:36	2016-06-01 22:41:36	5	\N
4	2024-02-07 20:25:18.91	2024-02-07 20:25:18.91	MASTER_RECHERCHE	finalite	entite	habili	\N	2016-06-01 22:41:36	2016-06-01 22:41:36	2016-06-01 22:41:36	5	\N
5	2024-02-07 20:25:27.884	2024-02-07 20:25:27.884	DOCTORAT	finalite	entite	habili	\N	2016-06-01 22:41:36	2016-06-01 22:41:36	2016-06-01 22:41:36	5	\N
\.


--
-- Data for Name: Domaine; Type: TABLE DATA; Schema: public; Owner: macbookpro
--

COPY public."Domaine" (id, "createdAt", "updatedAt", nom, slug) FROM stdin;
1	2024-02-07 20:19:53.142	2024-02-07 20:20:02.892	 Sciences de la Santé	\N
2	2024-02-07 20:20:20.538	2024-02-07 20:20:28.37	 Sciences et Technologies 	\N
3	2024-02-07 20:20:46.533	2024-02-07 20:20:51.492	Sciences juridiques, politiques et administratives	\N
4	2024-02-07 20:21:04.708	2024-02-07 20:21:09.668	Sciences économiques et de Gestion 	\N
5	2024-02-07 20:21:25.511	2024-02-07 20:21:30.969	Sciences de l’Homme et de la Société	\N
6	2024-02-07 20:21:47.621	2024-02-07 20:21:52	Lettres, Langues et Arts	\N
7	2024-02-07 20:22:22.883	2024-02-07 20:22:27.628	Sciences agronomiques 	\N
8	2024-02-07 20:22:47.152	2024-02-07 20:22:51.421	Sciences de l’Education et de la Formation	\N
\.


--
-- Data for Name: EmploiDuTemps; Type: TABLE DATA; Schema: public; Owner: macbookpro
--

COPY public."EmploiDuTemps" (id, "coursId", "classeId", "professeurId", "salleId", "dateDebut", "dateFin") FROM stdin;
\.


--
-- Data for Name: Etablissement; Type: TABLE DATA; Schema: public; Owner: macbookpro
--

COPY public."Etablissement" (id, "createdAt", "updatedAt", nom, matricule, sigle, "dateCreation", logo, "anneeEnCours", "adresseId", "contactId") FROM stdin;
1	2024-02-07 20:53:29.89	2024-02-19 15:59:04.508	JappoScholl	\N	\N	\N	\N	2023/2024	\N	\N
\.


--
-- Data for Name: Etudiant; Type: TABLE DATA; Schema: public; Owner: macbookpro
--

COPY public."Etudiant" (id, "createdAt", "updatedAt", slug, ine, baccaleaureat, "anneeBaccaleaureat", "profileId", "feuillePresencesId") FROM stdin;
1	2024-02-07 21:15:39.779	2024-02-07 21:15:39.779	dieng-3-bineta	INE-ddff573773	\N	\N	3	\N
2	2024-02-07 21:16:06.349	2024-02-07 21:16:06.349	diallo-4-alioune-badara	INE-c1ef5b83b0	\N	\N	4	\N
3	2024-02-07 21:16:23.552	2024-02-07 21:16:23.552	sow-5-amadou	INE-0834000def	\N	\N	5	\N
4	2024-02-13 15:33:48.896	2024-02-13 15:34:53.202	sene-6-jappo	INE-6812ad85e9		2002	6	\N
5	2024-02-15 09:13:21.636	2024-02-15 09:13:21.636	dieng-7-fatou	INE-0419495a91	\N	\N	7	\N
\.


--
-- Data for Name: EvaluationEtudiants; Type: TABLE DATA; Schema: public; Owner: macbookpro
--

COPY public."EvaluationEtudiants" (id, "createdAt", "updatedAt", "typeEvaluation", "dateEvaluation", duree, document, description, "coursId") FROM stdin;
10	2024-02-14 12:20:20.759	2024-02-14 12:19:58.486	Controle Continu	1970-01-01 00:00:00	0		\N	2
11	2024-02-15 16:02:51.25	2024-02-15 16:02:21.487	EXAMEN	1970-01-01 00:00:00	0		\N	2
12	2024-02-15 16:06:33.641	2024-02-15 16:06:18.348	Controle Continu	1970-01-01 00:00:00	0		\N	4
13	2024-02-15 16:09:22.827	2024-02-15 16:09:05.684	EXAMEN	1970-01-01 00:00:00	0		\N	4
14	2024-02-15 16:12:18.14	2024-02-15 16:12:03.128	Controle Continu	1970-01-01 00:00:00	0		\N	5
15	2024-02-15 16:15:32.594	2024-02-15 16:15:13.995	EXAMEN	1970-01-01 00:00:00	0		\N	5
16	2024-02-15 16:18:38.345	2024-02-15 16:18:27.356	Controle Continu	1970-01-01 00:00:00	0		\N	3
17	2024-02-15 16:18:58.168	2024-02-15 16:18:40.985	EXAMEN	1970-01-01 00:00:00	0		\N	3
18	2024-02-15 16:22:59.189	2024-02-15 16:22:43.459	Controle Continu	1970-01-01 00:00:00	0		\N	6
19	2024-02-15 16:23:11.481	2024-02-15 16:23:00.5	EXAMEN	1970-01-01 00:00:00	0		\N	6
20	2024-02-15 16:25:38.132	2024-02-15 16:25:25.609	Controle Continu	1970-01-01 00:00:00	0		\N	7
21	2024-02-15 16:25:51.045	2024-02-15 16:25:39.084	EXAMEN	1970-01-01 00:00:00	0		\N	7
22	2024-02-15 16:29:39.029	2024-02-15 16:29:29.32	Controle Continu	1970-01-01 00:00:00	0		\N	8
23	2024-02-15 16:29:51.869	2024-02-15 16:29:40.114	EXAMEN	1970-01-01 00:00:00	0		\N	8
24	2024-02-15 16:34:21.38	2024-02-15 16:34:10.805	Controle Continu	1970-01-01 00:00:00	0		\N	9
25	2024-02-15 16:34:34.689	2024-02-15 16:34:22.252	EXAMEN	1970-01-01 00:00:00	0		\N	9
26	2024-02-15 16:37:45.537	2024-02-15 16:37:36.447	Controle Continu	1970-01-01 00:00:00	0		\N	10
27	2024-02-15 16:37:56.615	2024-02-15 16:37:46.834	EXAMEN	1970-01-01 00:00:00	0		\N	10
28	2024-02-15 16:40:05.515	2024-02-15 16:39:57.681	Controle Continu	1970-01-01 00:00:00	0		\N	11
29	2024-02-15 16:40:21.337	2024-02-15 16:40:07.019	EXAMEN	1970-01-01 00:00:00	0		\N	11
30	2024-02-15 16:43:01.057	2024-02-15 16:42:53.281	Controle Continu	1970-01-01 00:00:00	0		\N	12
31	2024-02-15 16:43:15.308	2024-02-15 16:43:03.64	EXAMEN	1970-01-01 00:00:00	0		\N	12
32	2024-02-15 16:45:40.92	2024-02-15 16:45:33.548	Controle Continu	1970-01-01 00:00:00	0		\N	13
33	2024-02-15 16:45:50.798	2024-02-15 16:45:41.694	EXAMEN	1970-01-01 00:00:00	0		\N	13
34	2024-02-15 16:48:15.346	2024-02-15 16:48:08.152	Controle Continu	1970-01-01 00:00:00	0		\N	14
35	2024-02-15 16:48:42.095	2024-02-15 16:48:16.204	EXAMEN	1970-01-01 00:00:00	0		\N	14
\.


--
-- Data for Name: FeuillePresence; Type: TABLE DATA; Schema: public; Owner: macbookpro
--

COPY public."FeuillePresence" (id, "createdAt", "updatedAt", date, "heureDebut", "heureFin", "coursId", "etudiantId") FROM stdin;
\.


--
-- Data for Name: Inscription; Type: TABLE DATA; Schema: public; Owner: macbookpro
--

COPY public."Inscription" (id, "createdAt", "updatedAt", reference, "premiereInscription", "dernierDiplome", "autreEtablissement", "activiteProfessionnel", niveau, statut, "diplomeId", "etudiantId", "classeId") FROM stdin;
1	2024-02-07 21:17:44.716	2024-02-08 09:27:43.532	3-AFB57E83	f	\N	\N	\N	Licence1	Accepté	1	3	1
2	2024-02-08 12:09:44.239	2024-02-08 15:08:51.834	2-6B5F0F3F	f	\N	\N	\N	Licence1	Accepté	1	2	1
3	2024-02-08 12:52:07.103	2024-02-08 15:08:54.73	1-CCEA92BF	f	\N	\N	\N	Licence1	Accepté	1	1	1
5	2024-02-15 09:14:13.634	2024-02-15 09:14:27.422	5-888A7642	f	\N	\N	\N	Licence1	Accepté	1	5	4
4	2024-02-13 15:36:09.963	2024-02-15 09:14:29.889	4-EDB23364	f	\N	\N	\N	Licence1	Accepté	1	4	4
\.


--
-- Data for Name: Matiere; Type: TABLE DATA; Schema: public; Owner: macbookpro
--

COPY public."Matiere" (id, "createdAt", "updatedAt", code, nom, credit, "nbHeure", "uniteEnseignementId", coefficient) FROM stdin;
1	2024-02-07 20:58:34.876	2024-02-07 20:58:34.876	code_374	Développement Web	6	19	1	1
3	2024-02-13 12:13:26.84	2024-02-13 12:13:26.84	code_514	 Economie Générale	2	7	3	1
4	2024-02-13 12:13:47.514	2024-02-13 12:13:47.514	code_584	Géographie Economique	2	5	3	1
5	2024-02-13 12:15:24.339	2024-02-13 12:15:24.339	code_4	    Techniques de communication	2	7	4	1
6	2024-02-13 12:15:47.848	2024-02-13 12:15:47.848	code_542	 Techniques d expression francaise	2	5	4	1
7	2024-02-13 12:17:04.52	2024-02-13 12:17:04.52	code_950	 Anglais des affaires 1	4	9	4	1
8	2024-02-13 12:18:19.915	2024-02-13 12:18:19.915	code_858	Comptabilité Générale 1	3	4	5	1
9	2024-02-13 12:20:42.562	2024-02-13 12:20:42.562	code_342	Mathématiques Financières	2	4	5	1
10	2024-02-13 12:21:00.106	2024-02-13 12:21:00.106	code_462	Statistique Descriptive 1	2	5	5	1
11	2024-02-13 12:22:24.372	2024-02-13 12:22:24.372	code_265	 Marketing fondamental	2	6	6	1
12	2024-02-13 12:22:43.953	2024-02-13 12:22:43.953	code_744	Etude de marché 1\t	2	5	6	1
13	2024-02-13 12:24:01.098	2024-02-13 12:24:01.098	code_106	Introduction au commerce Inter	3	3	7	1
14	2024-02-13 12:24:20.75	2024-02-13 12:24:20.75	code_795	Techniques douanières 1 \t	2	2	7	1
2	2024-02-13 12:12:55.224	2024-02-15 17:54:00.957	code_520	  Introduction au droit\t	2	8	3	2
16	2024-02-21 13:06:18.988	2024-02-21 13:06:18.988	code_765	matier1	3	5	9	1
\.


--
-- Data for Name: Mention; Type: TABLE DATA; Schema: public; Owner: macbookpro
--

COPY public."Mention" (id, "createdAt", "updatedAt", nom, slug, "domaineId") FROM stdin;
1	2024-02-07 20:54:26.505	2024-02-07 20:54:26.505	IINFORMATIQUE	iinformatique	2
2	2024-02-13 12:08:34.007	2024-02-13 12:08:34.007	SCIENCES DE GESTION	sciences-de-gestion	4
\.


--
-- Data for Name: NoteEtudiant; Type: TABLE DATA; Schema: public; Owner: macbookpro
--

COPY public."NoteEtudiant" (id, "createdAt", "updatedAt", note, "evaluationEtudiantId", "etudiantId") FROM stdin;
29	2024-02-14 12:21:16.06	2024-02-14 12:21:26.593	15	10	4
30	2024-02-15 16:03:43.683	2024-02-15 16:03:02.57	16	11	4
31	2024-02-15 16:07:14.042	2024-02-15 16:06:39.712	14	12	4
32	2024-02-15 16:09:50.805	2024-02-15 16:09:28.007	13	13	4
33	2024-02-15 16:13:01.23	2024-02-15 16:12:25.43	17	14	4
34	2024-02-15 16:15:57.873	2024-02-15 16:15:38.744	13	15	4
35	2024-02-15 16:19:26.426	2024-02-15 16:19:02.052	14	16	4
36	2024-02-15 16:20:27.855	2024-02-15 16:20:04.67	17.5	17	4
37	2024-02-15 16:23:42.17	2024-02-15 16:23:15.94	12.75	18	4
38	2024-02-15 16:24:07.157	2024-02-15 16:23:43.776	14	19	4
39	2024-02-15 16:26:14.902	2024-02-15 16:25:55.033	16	20	4
40	2024-02-15 16:26:38.487	2024-02-15 16:26:19.339	18	21	4
41	2024-02-15 16:30:29.563	2024-02-15 16:31:21.131	12	22	4
42	2024-02-15 16:33:03.196	2024-02-15 16:32:43.912	13	23	4
44	2024-02-15 16:35:26.241	2024-02-15 16:35:04.759	13	25	4
43	2024-02-15 16:35:03.644	2024-02-15 16:35:51.313	11	24	4
45	2024-02-15 16:38:25.979	2024-02-15 16:37:29.634	18	26	4
46	2024-02-15 16:38:44.069	2024-02-15 16:38:27.877	12	27	4
47	2024-02-15 16:40:49.985	2024-02-15 16:40:26.163	11	28	4
48	2024-02-15 16:41:28.692	2024-02-15 16:40:51.297	13	29	4
49	2024-02-15 16:41:28.692	2024-02-15 16:43:29.395	12	30	4
50	2024-02-15 16:43:51.061	2024-02-15 16:43:31.33	15	31	4
51	2024-02-15 16:46:29.234	2024-02-15 16:46:09.976	17	32	4
52	2024-02-15 16:46:46.324	2024-02-15 16:46:30.261	10	33	4
53	2024-02-15 16:49:07.815	2024-02-15 16:48:50.146	13	34	4
54	2024-02-15 16:49:23.613	2024-02-15 16:49:08.811	10	35	4
55	2024-02-16 15:26:14.288	2024-02-16 15:26:24.398	10	10	5
\.


--
-- Data for Name: Paiement; Type: TABLE DATA; Schema: public; Owner: macbookpro
--

COPY public."Paiement" (id, "etudiantId", montant, "datePaiement", "methodePaiement", "referencePaiement", "typeFrais", "statutPaiement") FROM stdin;
\.


--
-- Data for Name: Permission; Type: TABLE DATA; Schema: public; Owner: macbookpro
--

COPY public."Permission" (id, "createdAt", "updatedAt", role, label, slug) FROM stdin;
\.


--
-- Data for Name: Professeur; Type: TABLE DATA; Schema: public; Owner: macbookpro
--

COPY public."Professeur" (id, "createdAt", "updatedAt", "profileId") FROM stdin;
1	2024-02-07 21:04:45.795	2024-02-07 21:04:45.795	1
2	2024-02-07 21:05:11.722	2024-02-07 21:05:11.722	2
\.


--
-- Data for Name: ReseauSocial; Type: TABLE DATA; Schema: public; Owner: macbookpro
--

COPY public."ReseauSocial" (id, "createdAt", "updatedAt", nom, username, url, "contactId") FROM stdin;
\.


--
-- Data for Name: Salle; Type: TABLE DATA; Schema: public; Owner: macbookpro
--

COPY public."Salle" (id, "createdAt", "updatedAt", nom, capacite, batiment, "etablissementId", "estDisponible") FROM stdin;
\.


--
-- Data for Name: Semestre; Type: TABLE DATA; Schema: public; Owner: macbookpro
--

COPY public."Semestre" (id, "createdAt", "updatedAt", numero, grade, "dateDebut", "dateFin", "nombreSemaine", "classeId") FROM stdin;
1	2024-02-07 20:56:43.62	2024-02-07 20:56:43.62	1	LICENCE_GENERALE	2024-02-03 20:56:00	2024-02-08 20:56:00	25	1
2	2024-02-07 20:57:04.18	2024-02-07 20:57:04.18	2	LICENCE_GENERALE	2024-02-25 20:56:00	2024-02-29 20:56:00	25	1
3	2024-02-13 12:11:19.371	2024-02-21 13:45:35.144	1	LICENCE_GENERALE	2024-02-14 12:11:00	2024-03-03 12:11:00	25	4
4	2024-02-19 16:33:24.055	2024-02-21 13:45:46.868	2	LICENCE_GENERALE	2024-03-02 16:33:00	2024-02-29 16:33:00	25	4
\.


--
-- Data for Name: Specialite; Type: TABLE DATA; Schema: public; Owner: macbookpro
--

COPY public."Specialite" (id, "createdAt", "updatedAt", nom, slug, "mentionId") FROM stdin;
1	2024-02-07 20:54:44.382	2024-02-07 20:54:44.382	Génie Logiciel	genie-logiciel	1
2	2024-02-07 20:55:17.837	2024-02-07 20:55:17.837	Télécommunication et Réseau	telecommunication-et-reseau	1
4	2024-02-16 11:27:40.183	2024-02-16 11:27:40.183	spec1	spec1	\N
6	2024-02-16 11:32:39.148	2024-02-16 11:32:39.148	spe	spe	\N
3	2024-02-13 12:08:53.462	2024-02-16 11:40:04.889	COMMERCE INTERNATIONAL	commerce-international	2
7	2024-02-16 11:40:28.114	2024-02-16 11:40:28.114	ddd	ddd	\N
\.


--
-- Data for Name: UniteEnseignement; Type: TABLE DATA; Schema: public; Owner: macbookpro
--

COPY public."UniteEnseignement" (id, "createdAt", "updatedAt", code, nom, credit, "semestreId") FROM stdin;
1	2024-02-07 20:58:05.078	2024-02-07 20:58:05.078	code_532	Conception et Développement	10	1
2	2024-02-07 20:59:14.769	2024-02-07 20:59:14.769	code_937	Réseau et Télecommunication	8	1
3	2024-02-13 12:12:26.709	2024-02-13 12:12:26.709	code_252	 ENVIRONNEMENT ECONOMIQUE ET JURIDIQUE	6	3
4	2024-02-13 12:14:45.221	2024-02-13 12:14:45.221	code_909	LANGUES ET OUTILS DE COMMUNICATION	11	3
5	2024-02-13 12:17:40.372	2024-02-13 12:17:40.372	code_71	 OUTILS DE GESTION	11	3
6	2024-02-13 12:21:55.886	2024-02-13 12:21:55.886	code_670	MARKETING MANAGEMENT	6	3
7	2024-02-13 12:23:26.62	2024-02-13 12:23:26.62	code_806	MANAGEMENT DES OPERATIONS DU COMMERCE INTERNATIONAL	5	3
9	2024-02-21 13:05:40.746	2024-02-21 13:05:40.746	code_242	ue1	10	4
\.


--
-- Data for Name: Utilisateur; Type: TABLE DATA; Schema: public; Owner: macbookpro
--

COPY public."Utilisateur" (id, matricule, "createdAt", "updatedAt", prenom, nom, "dateNaissance", "lieuNaissance", cni, genre, nationalite, "groupeSanguin", "etablissementId", "statutCompte", roles, "contactId", "adresseId", "accountId") FROM stdin;
1	PROF-cd09faca	2024-02-07 21:04:45.62	2024-02-07 21:04:45.785	Youssou	Traoré	\N	\N	\N	Masculin	\N	\N	\N	\N	{PROFESSEUR}	\N	\N	1
2	PROF-ab7fac6f	2024-02-07 21:05:11.604	2024-02-07 21:05:11.715	Habibou	Dieng	\N	\N	\N	Masculin	\N	\N	\N	\N	{PROFESSEUR}	\N	\N	2
3	ETUD-cb99ba8a	2024-02-07 21:15:39.608	2024-02-07 21:15:39.763	Bineta	Dieng	\N	\N	\N	Feminin	\N	\N	\N	\N	{ETUDIANT}	\N	\N	3
4	ETUD-d733a406	2024-02-07 21:16:06.258	2024-02-07 21:16:06.346	Alioune Badara	Diallo	\N	\N	\N	Masculin	\N	\N	\N	\N	{ETUDIANT}	\N	\N	4
5	ETUD-547acb55	2024-02-07 21:16:23.462	2024-02-07 21:16:23.55	Amadou	Sow	\N	\N	\N	Masculin	\N	\N	\N	\N	{ETUDIANT}	\N	\N	5
6	ETUD-a0a5e2aa	2024-02-13 15:33:48.684	2024-02-13 15:33:48.863	Jappo	Séné	\N	\N	\N	Masculin	\N	\N	\N	\N	{ETUDIANT}	\N	\N	6
7	ETUD-922894e1	2024-02-15 09:13:21.421	2024-02-15 09:13:21.604	Fatou	Dieng	\N	\N	\N	Masculin	\N	\N	\N	\N	{ETUDIANT}	\N	\N	7
\.


--
-- Data for Name: _DomaineToEtablissement; Type: TABLE DATA; Schema: public; Owner: macbookpro
--

COPY public."_DomaineToEtablissement" ("A", "B") FROM stdin;
2	1
4	1
3	1
\.


--
-- Data for Name: _PermissionToUtilisateur; Type: TABLE DATA; Schema: public; Owner: macbookpro
--

COPY public."_PermissionToUtilisateur" ("A", "B") FROM stdin;
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: macbookpro
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
e1ab784a-9404-4144-a795-b9e01adf159f	8791fb7ea6b185fbeeb95af7128e14b57b5f2afbaada1d4be6d353a7004583e6	2024-02-07 20:14:12.726561+00	20240206112111_	\N	\N	2024-02-07 20:14:12.58688+00	1
4ebc57df-6990-4360-ab7f-a8f3de778e0e	05568f06aa8f73a9f749e415050edd629d9835db97172a8e3dd6a68a0eb80253	2024-02-07 20:14:12.754036+00	20240207113952_	\N	\N	2024-02-07 20:14:12.727491+00	1
\.


--
-- Name: Account_id_seq; Type: SEQUENCE SET; Schema: public; Owner: macbookpro
--

SELECT pg_catalog.setval('public."Account_id_seq"', 7, true);


--
-- Name: Adresse_id_seq; Type: SEQUENCE SET; Schema: public; Owner: macbookpro
--

SELECT pg_catalog.setval('public."Adresse_id_seq"', 1, false);


--
-- Name: AnneeScolaire_id_seq; Type: SEQUENCE SET; Schema: public; Owner: macbookpro
--

SELECT pg_catalog.setval('public."AnneeScolaire_id_seq"', 10, true);


--
-- Name: Classe_id_seq; Type: SEQUENCE SET; Schema: public; Owner: macbookpro
--

SELECT pg_catalog.setval('public."Classe_id_seq"', 8, true);


--
-- Name: Contact_id_seq; Type: SEQUENCE SET; Schema: public; Owner: macbookpro
--

SELECT pg_catalog.setval('public."Contact_id_seq"', 1, false);


--
-- Name: Cours_id_seq; Type: SEQUENCE SET; Schema: public; Owner: macbookpro
--

SELECT pg_catalog.setval('public."Cours_id_seq"', 18, true);


--
-- Name: Diplome_id_seq; Type: SEQUENCE SET; Schema: public; Owner: macbookpro
--

SELECT pg_catalog.setval('public."Diplome_id_seq"', 5, true);


--
-- Name: Domaine_id_seq; Type: SEQUENCE SET; Schema: public; Owner: macbookpro
--

SELECT pg_catalog.setval('public."Domaine_id_seq"', 8, true);


--
-- Name: EmploiDuTemps_id_seq; Type: SEQUENCE SET; Schema: public; Owner: macbookpro
--

SELECT pg_catalog.setval('public."EmploiDuTemps_id_seq"', 1, false);


--
-- Name: Etablissement_id_seq; Type: SEQUENCE SET; Schema: public; Owner: macbookpro
--

SELECT pg_catalog.setval('public."Etablissement_id_seq"', 1, true);


--
-- Name: Etudiant_id_seq; Type: SEQUENCE SET; Schema: public; Owner: macbookpro
--

SELECT pg_catalog.setval('public."Etudiant_id_seq"', 5, true);


--
-- Name: EvaluationEtudiants_id_seq; Type: SEQUENCE SET; Schema: public; Owner: macbookpro
--

SELECT pg_catalog.setval('public."EvaluationEtudiants_id_seq"', 37, true);


--
-- Name: FeuillePresence_id_seq; Type: SEQUENCE SET; Schema: public; Owner: macbookpro
--

SELECT pg_catalog.setval('public."FeuillePresence_id_seq"', 1, false);


--
-- Name: Inscription_id_seq; Type: SEQUENCE SET; Schema: public; Owner: macbookpro
--

SELECT pg_catalog.setval('public."Inscription_id_seq"', 5, true);


--
-- Name: Matiere_id_seq; Type: SEQUENCE SET; Schema: public; Owner: macbookpro
--

SELECT pg_catalog.setval('public."Matiere_id_seq"', 16, true);


--
-- Name: Mention_id_seq; Type: SEQUENCE SET; Schema: public; Owner: macbookpro
--

SELECT pg_catalog.setval('public."Mention_id_seq"', 6, true);


--
-- Name: NoteEtudiant_id_seq; Type: SEQUENCE SET; Schema: public; Owner: macbookpro
--

SELECT pg_catalog.setval('public."NoteEtudiant_id_seq"', 56, true);


--
-- Name: Paiement_id_seq; Type: SEQUENCE SET; Schema: public; Owner: macbookpro
--

SELECT pg_catalog.setval('public."Paiement_id_seq"', 1, false);


--
-- Name: Permission_id_seq; Type: SEQUENCE SET; Schema: public; Owner: macbookpro
--

SELECT pg_catalog.setval('public."Permission_id_seq"', 1, false);


--
-- Name: Professeur_id_seq; Type: SEQUENCE SET; Schema: public; Owner: macbookpro
--

SELECT pg_catalog.setval('public."Professeur_id_seq"', 2, true);


--
-- Name: ReseauSocial_id_seq; Type: SEQUENCE SET; Schema: public; Owner: macbookpro
--

SELECT pg_catalog.setval('public."ReseauSocial_id_seq"', 1, false);


--
-- Name: Salle_id_seq; Type: SEQUENCE SET; Schema: public; Owner: macbookpro
--

SELECT pg_catalog.setval('public."Salle_id_seq"', 1, false);


--
-- Name: Semestre_id_seq; Type: SEQUENCE SET; Schema: public; Owner: macbookpro
--

SELECT pg_catalog.setval('public."Semestre_id_seq"', 4, true);


--
-- Name: Specialite_id_seq; Type: SEQUENCE SET; Schema: public; Owner: macbookpro
--

SELECT pg_catalog.setval('public."Specialite_id_seq"', 7, true);


--
-- Name: UniteEnseignement_id_seq; Type: SEQUENCE SET; Schema: public; Owner: macbookpro
--

SELECT pg_catalog.setval('public."UniteEnseignement_id_seq"', 9, true);


--
-- Name: Utilisateur_id_seq; Type: SEQUENCE SET; Schema: public; Owner: macbookpro
--

SELECT pg_catalog.setval('public."Utilisateur_id_seq"', 7, true);


--
-- Name: Account Account_pkey; Type: CONSTRAINT; Schema: public; Owner: macbookpro
--

ALTER TABLE ONLY public."Account"
    ADD CONSTRAINT "Account_pkey" PRIMARY KEY (id);


--
-- Name: Adresse Adresse_pkey; Type: CONSTRAINT; Schema: public; Owner: macbookpro
--

ALTER TABLE ONLY public."Adresse"
    ADD CONSTRAINT "Adresse_pkey" PRIMARY KEY (id);


--
-- Name: AnneeScolaire AnneeScolaire_pkey; Type: CONSTRAINT; Schema: public; Owner: macbookpro
--

ALTER TABLE ONLY public."AnneeScolaire"
    ADD CONSTRAINT "AnneeScolaire_pkey" PRIMARY KEY (id);


--
-- Name: Classe Classe_pkey; Type: CONSTRAINT; Schema: public; Owner: macbookpro
--

ALTER TABLE ONLY public."Classe"
    ADD CONSTRAINT "Classe_pkey" PRIMARY KEY (id);


--
-- Name: Contact Contact_pkey; Type: CONSTRAINT; Schema: public; Owner: macbookpro
--

ALTER TABLE ONLY public."Contact"
    ADD CONSTRAINT "Contact_pkey" PRIMARY KEY (id);


--
-- Name: Cours Cours_pkey; Type: CONSTRAINT; Schema: public; Owner: macbookpro
--

ALTER TABLE ONLY public."Cours"
    ADD CONSTRAINT "Cours_pkey" PRIMARY KEY (id);


--
-- Name: Diplome Diplome_pkey; Type: CONSTRAINT; Schema: public; Owner: macbookpro
--

ALTER TABLE ONLY public."Diplome"
    ADD CONSTRAINT "Diplome_pkey" PRIMARY KEY (id);


--
-- Name: Domaine Domaine_pkey; Type: CONSTRAINT; Schema: public; Owner: macbookpro
--

ALTER TABLE ONLY public."Domaine"
    ADD CONSTRAINT "Domaine_pkey" PRIMARY KEY (id);


--
-- Name: EmploiDuTemps EmploiDuTemps_pkey; Type: CONSTRAINT; Schema: public; Owner: macbookpro
--

ALTER TABLE ONLY public."EmploiDuTemps"
    ADD CONSTRAINT "EmploiDuTemps_pkey" PRIMARY KEY (id);


--
-- Name: Etablissement Etablissement_pkey; Type: CONSTRAINT; Schema: public; Owner: macbookpro
--

ALTER TABLE ONLY public."Etablissement"
    ADD CONSTRAINT "Etablissement_pkey" PRIMARY KEY (id);


--
-- Name: Etudiant Etudiant_pkey; Type: CONSTRAINT; Schema: public; Owner: macbookpro
--

ALTER TABLE ONLY public."Etudiant"
    ADD CONSTRAINT "Etudiant_pkey" PRIMARY KEY (id);


--
-- Name: EvaluationEtudiants EvaluationEtudiants_pkey; Type: CONSTRAINT; Schema: public; Owner: macbookpro
--

ALTER TABLE ONLY public."EvaluationEtudiants"
    ADD CONSTRAINT "EvaluationEtudiants_pkey" PRIMARY KEY (id);


--
-- Name: FeuillePresence FeuillePresence_pkey; Type: CONSTRAINT; Schema: public; Owner: macbookpro
--

ALTER TABLE ONLY public."FeuillePresence"
    ADD CONSTRAINT "FeuillePresence_pkey" PRIMARY KEY (id);


--
-- Name: Inscription Inscription_pkey; Type: CONSTRAINT; Schema: public; Owner: macbookpro
--

ALTER TABLE ONLY public."Inscription"
    ADD CONSTRAINT "Inscription_pkey" PRIMARY KEY (id);


--
-- Name: Matiere Matiere_pkey; Type: CONSTRAINT; Schema: public; Owner: macbookpro
--

ALTER TABLE ONLY public."Matiere"
    ADD CONSTRAINT "Matiere_pkey" PRIMARY KEY (id);


--
-- Name: Mention Mention_pkey; Type: CONSTRAINT; Schema: public; Owner: macbookpro
--

ALTER TABLE ONLY public."Mention"
    ADD CONSTRAINT "Mention_pkey" PRIMARY KEY (id);


--
-- Name: NoteEtudiant NoteEtudiant_pkey; Type: CONSTRAINT; Schema: public; Owner: macbookpro
--

ALTER TABLE ONLY public."NoteEtudiant"
    ADD CONSTRAINT "NoteEtudiant_pkey" PRIMARY KEY (id);


--
-- Name: Paiement Paiement_pkey; Type: CONSTRAINT; Schema: public; Owner: macbookpro
--

ALTER TABLE ONLY public."Paiement"
    ADD CONSTRAINT "Paiement_pkey" PRIMARY KEY (id);


--
-- Name: Permission Permission_pkey; Type: CONSTRAINT; Schema: public; Owner: macbookpro
--

ALTER TABLE ONLY public."Permission"
    ADD CONSTRAINT "Permission_pkey" PRIMARY KEY (id);


--
-- Name: Professeur Professeur_pkey; Type: CONSTRAINT; Schema: public; Owner: macbookpro
--

ALTER TABLE ONLY public."Professeur"
    ADD CONSTRAINT "Professeur_pkey" PRIMARY KEY (id);


--
-- Name: ReseauSocial ReseauSocial_pkey; Type: CONSTRAINT; Schema: public; Owner: macbookpro
--

ALTER TABLE ONLY public."ReseauSocial"
    ADD CONSTRAINT "ReseauSocial_pkey" PRIMARY KEY (id);


--
-- Name: Salle Salle_pkey; Type: CONSTRAINT; Schema: public; Owner: macbookpro
--

ALTER TABLE ONLY public."Salle"
    ADD CONSTRAINT "Salle_pkey" PRIMARY KEY (id);


--
-- Name: Semestre Semestre_pkey; Type: CONSTRAINT; Schema: public; Owner: macbookpro
--

ALTER TABLE ONLY public."Semestre"
    ADD CONSTRAINT "Semestre_pkey" PRIMARY KEY (id);


--
-- Name: Specialite Specialite_pkey; Type: CONSTRAINT; Schema: public; Owner: macbookpro
--

ALTER TABLE ONLY public."Specialite"
    ADD CONSTRAINT "Specialite_pkey" PRIMARY KEY (id);


--
-- Name: UniteEnseignement UniteEnseignement_pkey; Type: CONSTRAINT; Schema: public; Owner: macbookpro
--

ALTER TABLE ONLY public."UniteEnseignement"
    ADD CONSTRAINT "UniteEnseignement_pkey" PRIMARY KEY (id);


--
-- Name: Utilisateur Utilisateur_pkey; Type: CONSTRAINT; Schema: public; Owner: macbookpro
--

ALTER TABLE ONLY public."Utilisateur"
    ADD CONSTRAINT "Utilisateur_pkey" PRIMARY KEY (id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: macbookpro
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: Account_uid_key; Type: INDEX; Schema: public; Owner: macbookpro
--

CREATE UNIQUE INDEX "Account_uid_key" ON public."Account" USING btree (uid);


--
-- Name: Account_username_key; Type: INDEX; Schema: public; Owner: macbookpro
--

CREATE UNIQUE INDEX "Account_username_key" ON public."Account" USING btree (username);


--
-- Name: Contact_email_key; Type: INDEX; Schema: public; Owner: macbookpro
--

CREATE UNIQUE INDEX "Contact_email_key" ON public."Contact" USING btree (email);


--
-- Name: Contact_fax_key; Type: INDEX; Schema: public; Owner: macbookpro
--

CREATE UNIQUE INDEX "Contact_fax_key" ON public."Contact" USING btree (fax);


--
-- Name: Contact_fix_key; Type: INDEX; Schema: public; Owner: macbookpro
--

CREATE UNIQUE INDEX "Contact_fix_key" ON public."Contact" USING btree (fix);


--
-- Name: Contact_siteWeb_key; Type: INDEX; Schema: public; Owner: macbookpro
--

CREATE UNIQUE INDEX "Contact_siteWeb_key" ON public."Contact" USING btree ("siteWeb");


--
-- Name: Contact_telephone_key; Type: INDEX; Schema: public; Owner: macbookpro
--

CREATE UNIQUE INDEX "Contact_telephone_key" ON public."Contact" USING btree (telephone);


--
-- Name: Domaine_slug_key; Type: INDEX; Schema: public; Owner: macbookpro
--

CREATE UNIQUE INDEX "Domaine_slug_key" ON public."Domaine" USING btree (slug);


--
-- Name: Etudiant_ine_key; Type: INDEX; Schema: public; Owner: macbookpro
--

CREATE UNIQUE INDEX "Etudiant_ine_key" ON public."Etudiant" USING btree (ine);


--
-- Name: Etudiant_profileId_key; Type: INDEX; Schema: public; Owner: macbookpro
--

CREATE UNIQUE INDEX "Etudiant_profileId_key" ON public."Etudiant" USING btree ("profileId");


--
-- Name: Etudiant_slug_key; Type: INDEX; Schema: public; Owner: macbookpro
--

CREATE UNIQUE INDEX "Etudiant_slug_key" ON public."Etudiant" USING btree (slug);


--
-- Name: Inscription_reference_key; Type: INDEX; Schema: public; Owner: macbookpro
--

CREATE UNIQUE INDEX "Inscription_reference_key" ON public."Inscription" USING btree (reference);


--
-- Name: Mention_slug_key; Type: INDEX; Schema: public; Owner: macbookpro
--

CREATE UNIQUE INDEX "Mention_slug_key" ON public."Mention" USING btree (slug);


--
-- Name: NoteEtudiant_evaluationEtudiantId_etudiantId_note_key; Type: INDEX; Schema: public; Owner: macbookpro
--

CREATE UNIQUE INDEX "NoteEtudiant_evaluationEtudiantId_etudiantId_note_key" ON public."NoteEtudiant" USING btree ("evaluationEtudiantId", "etudiantId", note);


--
-- Name: Permission_label_key; Type: INDEX; Schema: public; Owner: macbookpro
--

CREATE UNIQUE INDEX "Permission_label_key" ON public."Permission" USING btree (label);


--
-- Name: Permission_slug_key; Type: INDEX; Schema: public; Owner: macbookpro
--

CREATE UNIQUE INDEX "Permission_slug_key" ON public."Permission" USING btree (slug);


--
-- Name: Professeur_profileId_key; Type: INDEX; Schema: public; Owner: macbookpro
--

CREATE UNIQUE INDEX "Professeur_profileId_key" ON public."Professeur" USING btree ("profileId");


--
-- Name: Specialite_slug_key; Type: INDEX; Schema: public; Owner: macbookpro
--

CREATE UNIQUE INDEX "Specialite_slug_key" ON public."Specialite" USING btree (slug);


--
-- Name: Utilisateur_accountId_key; Type: INDEX; Schema: public; Owner: macbookpro
--

CREATE UNIQUE INDEX "Utilisateur_accountId_key" ON public."Utilisateur" USING btree ("accountId");


--
-- Name: Utilisateur_matricule_key; Type: INDEX; Schema: public; Owner: macbookpro
--

CREATE UNIQUE INDEX "Utilisateur_matricule_key" ON public."Utilisateur" USING btree (matricule);


--
-- Name: _DomaineToEtablissement_AB_unique; Type: INDEX; Schema: public; Owner: macbookpro
--

CREATE UNIQUE INDEX "_DomaineToEtablissement_AB_unique" ON public."_DomaineToEtablissement" USING btree ("A", "B");


--
-- Name: _DomaineToEtablissement_B_index; Type: INDEX; Schema: public; Owner: macbookpro
--

CREATE INDEX "_DomaineToEtablissement_B_index" ON public."_DomaineToEtablissement" USING btree ("B");


--
-- Name: _PermissionToUtilisateur_AB_unique; Type: INDEX; Schema: public; Owner: macbookpro
--

CREATE UNIQUE INDEX "_PermissionToUtilisateur_AB_unique" ON public."_PermissionToUtilisateur" USING btree ("A", "B");


--
-- Name: _PermissionToUtilisateur_B_index; Type: INDEX; Schema: public; Owner: macbookpro
--

CREATE INDEX "_PermissionToUtilisateur_B_index" ON public."_PermissionToUtilisateur" USING btree ("B");


--
-- Name: Classe Classe_anneeScolaireId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: macbookpro
--

ALTER TABLE ONLY public."Classe"
    ADD CONSTRAINT "Classe_anneeScolaireId_fkey" FOREIGN KEY ("anneeScolaireId") REFERENCES public."AnneeScolaire"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Classe Classe_etablissementId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: macbookpro
--

ALTER TABLE ONLY public."Classe"
    ADD CONSTRAINT "Classe_etablissementId_fkey" FOREIGN KEY ("etablissementId") REFERENCES public."Etablissement"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Classe Classe_specialiteId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: macbookpro
--

ALTER TABLE ONLY public."Classe"
    ADD CONSTRAINT "Classe_specialiteId_fkey" FOREIGN KEY ("specialiteId") REFERENCES public."Specialite"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Cours Cours_classeId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: macbookpro
--

ALTER TABLE ONLY public."Cours"
    ADD CONSTRAINT "Cours_classeId_fkey" FOREIGN KEY ("classeId") REFERENCES public."Classe"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Cours Cours_matiereId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: macbookpro
--

ALTER TABLE ONLY public."Cours"
    ADD CONSTRAINT "Cours_matiereId_fkey" FOREIGN KEY ("matiereId") REFERENCES public."Matiere"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Cours Cours_professeurId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: macbookpro
--

ALTER TABLE ONLY public."Cours"
    ADD CONSTRAINT "Cours_professeurId_fkey" FOREIGN KEY ("professeurId") REFERENCES public."Professeur"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Cours Cours_salleId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: macbookpro
--

ALTER TABLE ONLY public."Cours"
    ADD CONSTRAINT "Cours_salleId_fkey" FOREIGN KEY ("salleId") REFERENCES public."Salle"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Diplome Diplome_specialiteId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: macbookpro
--

ALTER TABLE ONLY public."Diplome"
    ADD CONSTRAINT "Diplome_specialiteId_fkey" FOREIGN KEY ("specialiteId") REFERENCES public."Specialite"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: EmploiDuTemps EmploiDuTemps_classeId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: macbookpro
--

ALTER TABLE ONLY public."EmploiDuTemps"
    ADD CONSTRAINT "EmploiDuTemps_classeId_fkey" FOREIGN KEY ("classeId") REFERENCES public."Classe"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: EmploiDuTemps EmploiDuTemps_coursId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: macbookpro
--

ALTER TABLE ONLY public."EmploiDuTemps"
    ADD CONSTRAINT "EmploiDuTemps_coursId_fkey" FOREIGN KEY ("coursId") REFERENCES public."Cours"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: EmploiDuTemps EmploiDuTemps_professeurId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: macbookpro
--

ALTER TABLE ONLY public."EmploiDuTemps"
    ADD CONSTRAINT "EmploiDuTemps_professeurId_fkey" FOREIGN KEY ("professeurId") REFERENCES public."Professeur"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: EmploiDuTemps EmploiDuTemps_salleId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: macbookpro
--

ALTER TABLE ONLY public."EmploiDuTemps"
    ADD CONSTRAINT "EmploiDuTemps_salleId_fkey" FOREIGN KEY ("salleId") REFERENCES public."Salle"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Etablissement Etablissement_adresseId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: macbookpro
--

ALTER TABLE ONLY public."Etablissement"
    ADD CONSTRAINT "Etablissement_adresseId_fkey" FOREIGN KEY ("adresseId") REFERENCES public."Adresse"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Etablissement Etablissement_contactId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: macbookpro
--

ALTER TABLE ONLY public."Etablissement"
    ADD CONSTRAINT "Etablissement_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES public."Contact"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Etudiant Etudiant_profileId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: macbookpro
--

ALTER TABLE ONLY public."Etudiant"
    ADD CONSTRAINT "Etudiant_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES public."Utilisateur"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: EvaluationEtudiants EvaluationEtudiants_coursId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: macbookpro
--

ALTER TABLE ONLY public."EvaluationEtudiants"
    ADD CONSTRAINT "EvaluationEtudiants_coursId_fkey" FOREIGN KEY ("coursId") REFERENCES public."Cours"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: FeuillePresence FeuillePresence_coursId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: macbookpro
--

ALTER TABLE ONLY public."FeuillePresence"
    ADD CONSTRAINT "FeuillePresence_coursId_fkey" FOREIGN KEY ("coursId") REFERENCES public."Cours"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: FeuillePresence FeuillePresence_etudiantId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: macbookpro
--

ALTER TABLE ONLY public."FeuillePresence"
    ADD CONSTRAINT "FeuillePresence_etudiantId_fkey" FOREIGN KEY ("etudiantId") REFERENCES public."Etudiant"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Inscription Inscription_classeId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: macbookpro
--

ALTER TABLE ONLY public."Inscription"
    ADD CONSTRAINT "Inscription_classeId_fkey" FOREIGN KEY ("classeId") REFERENCES public."Classe"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Inscription Inscription_diplomeId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: macbookpro
--

ALTER TABLE ONLY public."Inscription"
    ADD CONSTRAINT "Inscription_diplomeId_fkey" FOREIGN KEY ("diplomeId") REFERENCES public."Diplome"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Inscription Inscription_etudiantId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: macbookpro
--

ALTER TABLE ONLY public."Inscription"
    ADD CONSTRAINT "Inscription_etudiantId_fkey" FOREIGN KEY ("etudiantId") REFERENCES public."Etudiant"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Matiere Matiere_uniteEnseignementId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: macbookpro
--

ALTER TABLE ONLY public."Matiere"
    ADD CONSTRAINT "Matiere_uniteEnseignementId_fkey" FOREIGN KEY ("uniteEnseignementId") REFERENCES public."UniteEnseignement"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Mention Mention_domaineId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: macbookpro
--

ALTER TABLE ONLY public."Mention"
    ADD CONSTRAINT "Mention_domaineId_fkey" FOREIGN KEY ("domaineId") REFERENCES public."Domaine"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: NoteEtudiant NoteEtudiant_etudiantId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: macbookpro
--

ALTER TABLE ONLY public."NoteEtudiant"
    ADD CONSTRAINT "NoteEtudiant_etudiantId_fkey" FOREIGN KEY ("etudiantId") REFERENCES public."Etudiant"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: NoteEtudiant NoteEtudiant_evaluationEtudiantId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: macbookpro
--

ALTER TABLE ONLY public."NoteEtudiant"
    ADD CONSTRAINT "NoteEtudiant_evaluationEtudiantId_fkey" FOREIGN KEY ("evaluationEtudiantId") REFERENCES public."EvaluationEtudiants"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Paiement Paiement_etudiantId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: macbookpro
--

ALTER TABLE ONLY public."Paiement"
    ADD CONSTRAINT "Paiement_etudiantId_fkey" FOREIGN KEY ("etudiantId") REFERENCES public."Etudiant"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Professeur Professeur_profileId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: macbookpro
--

ALTER TABLE ONLY public."Professeur"
    ADD CONSTRAINT "Professeur_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES public."Utilisateur"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: ReseauSocial ReseauSocial_contactId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: macbookpro
--

ALTER TABLE ONLY public."ReseauSocial"
    ADD CONSTRAINT "ReseauSocial_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES public."Contact"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Salle Salle_etablissementId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: macbookpro
--

ALTER TABLE ONLY public."Salle"
    ADD CONSTRAINT "Salle_etablissementId_fkey" FOREIGN KEY ("etablissementId") REFERENCES public."Etablissement"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Semestre Semestre_classeId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: macbookpro
--

ALTER TABLE ONLY public."Semestre"
    ADD CONSTRAINT "Semestre_classeId_fkey" FOREIGN KEY ("classeId") REFERENCES public."Classe"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Specialite Specialite_mentionId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: macbookpro
--

ALTER TABLE ONLY public."Specialite"
    ADD CONSTRAINT "Specialite_mentionId_fkey" FOREIGN KEY ("mentionId") REFERENCES public."Mention"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: UniteEnseignement UniteEnseignement_semestreId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: macbookpro
--

ALTER TABLE ONLY public."UniteEnseignement"
    ADD CONSTRAINT "UniteEnseignement_semestreId_fkey" FOREIGN KEY ("semestreId") REFERENCES public."Semestre"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Utilisateur Utilisateur_adresseId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: macbookpro
--

ALTER TABLE ONLY public."Utilisateur"
    ADD CONSTRAINT "Utilisateur_adresseId_fkey" FOREIGN KEY ("adresseId") REFERENCES public."Adresse"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Utilisateur Utilisateur_contactId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: macbookpro
--

ALTER TABLE ONLY public."Utilisateur"
    ADD CONSTRAINT "Utilisateur_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES public."Contact"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Utilisateur Utilisateur_etablissementId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: macbookpro
--

ALTER TABLE ONLY public."Utilisateur"
    ADD CONSTRAINT "Utilisateur_etablissementId_fkey" FOREIGN KEY ("etablissementId") REFERENCES public."Etablissement"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: _DomaineToEtablissement _DomaineToEtablissement_A_fkey; Type: FK CONSTRAINT; Schema: public; Owner: macbookpro
--

ALTER TABLE ONLY public."_DomaineToEtablissement"
    ADD CONSTRAINT "_DomaineToEtablissement_A_fkey" FOREIGN KEY ("A") REFERENCES public."Domaine"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _DomaineToEtablissement _DomaineToEtablissement_B_fkey; Type: FK CONSTRAINT; Schema: public; Owner: macbookpro
--

ALTER TABLE ONLY public."_DomaineToEtablissement"
    ADD CONSTRAINT "_DomaineToEtablissement_B_fkey" FOREIGN KEY ("B") REFERENCES public."Etablissement"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _PermissionToUtilisateur _PermissionToUtilisateur_A_fkey; Type: FK CONSTRAINT; Schema: public; Owner: macbookpro
--

ALTER TABLE ONLY public."_PermissionToUtilisateur"
    ADD CONSTRAINT "_PermissionToUtilisateur_A_fkey" FOREIGN KEY ("A") REFERENCES public."Permission"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _PermissionToUtilisateur _PermissionToUtilisateur_B_fkey; Type: FK CONSTRAINT; Schema: public; Owner: macbookpro
--

ALTER TABLE ONLY public."_PermissionToUtilisateur"
    ADD CONSTRAINT "_PermissionToUtilisateur_B_fkey" FOREIGN KEY ("B") REFERENCES public."Utilisateur"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

