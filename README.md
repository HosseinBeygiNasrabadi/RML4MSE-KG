# RML4MSE-KG

RML4MSE-KG is a collection of several RML pipelines for integrating NFDI MatWerk community datasets (e.g. JSON) into **[MSE-KG](https://nfdi.fiz-karlsruhe.de/matwerk/)**.

## How it works

Within a repo, a YARRRML mapping (`*.yml`) describes how the source JSON maps to RDF, grounded in a domain ontology; a driver script (`*.sh`) compiles that mapping to RML and runs it over every JSON file to produce one combined, idempotent `.ttl` file.

<img width="1383" height="216" alt="image" src="https://github.com/user-attachments/assets/bd2e3ae1-396f-45d3-9c34-f49cc4999ad7" />


Each dataset repo produces RDF that flows into Zenodo and the PMD data portal, which are in turn harvested into MSE-KG; SPARQL, SHACL, and reasoning validate the result along the way.

<img width="1154" height="361" alt="image" src="https://github.com/user-attachments/assets/616d7fe5-e548-4fd8-873d-2bbaf23d6a4f" />


## Sub-repositories

### [Creep reference dataset (IUC02)](./Creep%20reference%20dataset%20(IUC02))

The pipeline is planned to map **[BAM Reference Data: Creep of Single-Crystal Ni-Based Superalloy CMSX-6](https://zenodo.org/records/20132712)** into MSE-KG. The RDF-converted sources semantically descrble creep testing process, test pieces, materials & chemical composition, test machines & extensometers, input specifications (stress, temperature), and primary/secondary test results (rupture time, gauge lengths, durations, elongation/extension percentages).

**Links:**
- [Source JSON datasets](https://zenodo.org/records/20132712)
- [Reused Creep Testing Ontology (CTO)](https://github.com/HosseinBeygiNasrabadi/creep-testing-ontology)
- RDF in MaterialDigital Data Portal, **[Knowledge Graph for Creep Reference Datasets (NFDI MatWerk IUC02)](https://dataportal.material-digital.de/dataset/knowledge-graph-for-creep-reference-datasets-nfdi-matwerk-iuc02)**: 
- [SPARQL endpoint](https://dataportal.material-digital.de/dataset/knowledge-graph-for-creep-reference-datasets-nfdi-matwerk-iuc02/fuseki)
- [Guided query UI (Sparklis)](https://dataportal.material-digital.de/sparklis/?title=knowledge-graph-for-creep-reference-datasets-nfdi-matwerk-iuc02&endpoint=https%3A//dataportal.material-digital.de/dataset/bb5b86d3-ade4-4b63-9e84-783de85a4abd/fuseki/%24/sparql&entity_lexicon_select=http%3A//www.w3.org/2000/01/rdf-schema%23label&concept_lexicons_select=http%3A//www.w3.org/2000/01/rdf-schema%23label)

**Running it yourself:** If you have a new dataset;

1. Clone the repository,
2. Put your dataset in the `JSON datasets/` folder,
3. Run `bash creep_reference_dataset_map.sh`,
4. Copy the updated `creep_reference_dataset_rdf.ttl` and push it to Zenodo / the PMD data portal.

**Example SPARQL queries** (see [`queries/`](./Creep%20reference%20dataset%20(IUC02)/queries)):

1. List all creep datasets together with their test piece IDs and material identifiers.
2. Retrieve the initial stress and temperature used for each creep test.
3. Rank datasets by creep rupture time, longest to shortest.
4. Find all datasets tested within a given temperature range.
5. Retrieve the full chemical composition (all elements, wt.% and ppm) for a given test piece.
6. Compare percentage elongation after creep fracture across all datasets.
7. Retrieve test duration, soak time, and heating time together for each creep testing process.
8. List all creep testing machines and extensometers together with the datasets that used them.

### MiMeDat (IUC07)

*Coming soon.*


## How to cite

If you use RML4MSE-KG in your research, please cite:

```bibtex
@software{RML4MSE-KG,
  author  = {Beygi Nasrabadi, Hossein and Norouzi, Ebrahim and Waitelonis, Jörg and Sack, Harald},
  title   = {RML pipelines for integrating NFDI MatWerk community datasets to MSE-KG (RML4MSE-KG)},
  url     = {https://github.com/HosseinBeygiNasrabadi/RML4MSE-KG},
  version = {1.0.0},
  date    = {2026-07-22},
}
```

## Contact

Dr. Hossein Beygi Nasrabadi
FIZ Karlsruhe – Leibniz Institute for Information Infrastructure GmbH
Email: Hossein.Beygi_Nasrabadi@fiz-karlsruhe.de
