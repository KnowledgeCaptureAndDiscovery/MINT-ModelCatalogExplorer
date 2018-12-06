var queries = [
  {
    "description": "What are all the models currently described in the catalog ?",
    "query":"PREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0D%0APREFIX+model%3A+%3Chttps%3A%2F%2Fw3id.org%2Fmint%2FmodelCatalog%23%3E%0D%0ASELECT+%3Fmodel+%3Flabel%0D%0AWHERE+%7B%0D%0A++%3Fmodel+a+model%3AModel.%0D%0A++%3Fmodel+rdfs%3Alabel+%3Flabel%0D%0A%7D"
  },
  {
  	"description": "Fetch data about this model",
  	"query": "PREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0D%0APREFIX+model%3A+%3Chttps%3A%2F%2Fw3id.org%2Fmint%2FmodelCatalog%23%3E%0D%0ASELECT+%3Fmodel+%24reln+%3Fprop%0D%0AWHERE+%7B%0D%0A++%3Fmodel+rdfs%3Alabel+%22{}%22.%0D%0A++%3Fmodel+%3Freln+%3Fprop%0D%0A%7D"
  },
  {
  	"description": "Fetch this model configuration",
  	"query": "PREFIX+inst%3A+%3Chttps%3A%2F%2Fw3id.org%2Fmint%2Finstance%23%3E%0D%0APREFIX+model%3A+%3Chttps%3A%2F%2Fw3id.org%2Fmint%2FmodelCatalog%23%3E%0D%0APREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0D%0ASELECT+%3Fmodel_config%0D%0A%28GROUP_CONCAT%28DISTINCT+%3Finput%3BSEPARATOR%3D%27%2C+%27%29+AS+%3Finput_variables%29%0D%0A%28GROUP_CONCAT%28DISTINCT+%3Foutput%3BSEPARATOR%3D%27%2C+%27%29+AS+%3Foutput_variables%29%0D%0AWHERE+%7B%0D%0A++%3Fmodel+rdfs%3Alabel+%22{}%22.%0D%0A++%3Fmodel+model%3AhasConfiguration+%3Fmodel_config+.%0D%0A++%3Fmodel_config+model%3AhasInput+%3Finput+.%0D%0A++%3Fmodel_config+model%3AhasOutput+%3Foutput%0D%0A%7D%0D%0AGROUP+BY%28%3Fmodel_config%29"
  },
  {
    "description": "Get all the models with their descriptions",
    "query": "http://ontosoft.isi.edu:8001/api/KnowledgeCaptureAndDiscovery/MINT-ModelCatalogQueries/getModels?endpoint=http%3A%2F%2Fontosoft.isi.edu%3A3030%2Fds%2Fquery"
  },
  {
    "description": "Get all the models related to a specific Category",
    "query": "http://ontosoft.isi.edu:8001/api/KnowledgeCaptureAndDiscovery/MINT-ModelCatalogQueries/getModelsForCategory?endpoint=http%3A%2F%2Fontosoft.isi.edu%3A3030%2Fds%2Fquery"
  },
  {
    "description": "Fetch model configuration",
    "query": "http://ontosoft.isi.edu:8001/api/KnowledgeCaptureAndDiscovery/MINT-ModelCatalogQueries/getVariablePresentationsForModel"
  },
  {
    "description": "Fetch version of a model",
    "query": "http://ontosoft.isi.edu:8001/api/KnowledgeCaptureAndDiscovery/MINT-ModelCatalogQueries/getResourceMetadata?endpoint=http%3A%2F%2Fontosoft.isi.edu%3A3030%2Fds%2Fquery"
  },{
      "decription":"Fetch variable configuration",
        "query":"http://ontosoft.isi.edu:8001/api/KnowledgeCaptureAndDiscovery/MINT-ModelCatalogQueries/getI_OVariablesAndUnits"
    },{
      "description":"Fetch model-configuration data",
        "query":"http://ontosoft.isi.edu:8001/api/KnowledgeCaptureAndDiscovery/MINT-ModelCatalogQueries/getModelConfigurationMetadata"
    }

]
