const flows = require('./flows')
const flowNumbers = require('./analytics/overAllFlowNumbers')

let length = flowNumbers.lengthOfFlows(flows.flows)
console.log("Total Flows = ",length)

let length1 = flowNumbers.lengthofDeletedFlows(flows.flows)
console.log("Length of deleted flows  = ", length1)

let length2 = flowNumbers.lengthofCompletedFlows(flows.flows)
console.log("Length of completed flows = ", length2)

let noOfArchivedFlows = flowNumbers. numberOfArchivedFlows(flows.flows)
console.log("length of archived flows =",noOfArchivedFlows)

let flowWithMoreThanTwoTenants = flowNumbers.moreThanTwoTenants(flows.flows)
console.log("number of flows with more than 2 tenants=", flowWithMoreThanTwoTenants) 

let flowWithAstGenrated = flowNumbers.numOfFlowsWithASTGen(flows.flows)
console.log("number of flows with AST generated =",flowWithAstGenrated)

let flowWithNhaGenrated = flowNumbers.numOfFLowsWithNhaGen(flows.flows)
console.log("number of flows with NHA genrated =", flowWithNhaGenrated)

let numberOfFlowsUsed = flowNumbers.numOfFlowUsed(flows.flows)
console.log("number of flows Used =", numberOfFlowsUsed)

let numberOfFlowsReapit = flowNumbers.numOfFlowsReapit(flows.flows)
console.log("number of flows created from reapit =",numberOfFlowsReapit )

let numberOfFlowsAddedToProperty = flowNumbers.numOfFlowsAddedProperty(flows.flows)
console.log("number of flows added to property =",numberOfFlowsAddedToProperty)

let flowsWithEmprtyLandlords = flowNumbers.flowWithEmptyLandlord(flows.flows)
console.log("number of flows with empty landlords =",flowsWithEmprtyLandlords)

let flowsWithASTSigned = flowNumbers. flowWithSignedAST(flows.flows)
console.log("number of flows where ast is generated and its signed =",flowsWithASTSigned)

let flowsWithASTNotSigned = flowNumbers.flowWithNotSignedAST(flows.flows)
console.log("number of flows where ast is generated and its not signed =",flowsWithASTNotSigned)

let flowsWithGreaterRentalAmount = flowNumbers.flowswithRentalAmount(flows.flows)
console.log("number of flows with rental amount is greater than 5000=",flowsWithGreaterRentalAmount)

let flowsWithIrpRequired = flowNumbers.flowsWithIrpRequired(flows.flows)
console.log("number of flows where IRP is required =",flowsWithIrpRequired)

let flowsWithIrpNotRequired = flowNumbers.flowsWithIrpNotRequired(flows.flows)
console.log("number of flows where IRP is Not required =",flowsWithIrpNotRequired)

let flowwithTenantWaterResponsibility = flowNumbers.tenantWithWaterResponsibility(flows.flows)
console.log("number of flows tenant has the water responsibility  =",flowwithTenantWaterResponsibility)

let flowwithAgentWaterResponsibility = flowNumbers.agentWithWaterResponsibility(flows.flows)
console.log("number of flows agent has the water responsibility  =",flowwithAgentWaterResponsibility)

let flowsWithFurnishedProperties = flowNumbers.furnishedProperties(flows.flows)
console.log("number of flows with furnished property   =",flowsWithFurnishedProperties )

let flowsWithCertificates = flowNumbers.certificates(flows.flows)
console.log("number of flows where number of certificates is greater than 2 =",flowsWithCertificates)

let flowAvarageRentalAmount = flowNumbers.avarageRentalAmount(flows.flows)
console.log("average rental amount per flow",flowAvarageRentalAmount )

let flowAvarageHoldingDepositAmount = flowNumbers.avarageHoldingDeposit(flows.flows)
console.log("average holding deposit per flow",flowAvarageHoldingDepositAmount )

let flowAvarageCertificates = flowNumbers.avarageCertificates(flows.flows)
console.log("average certififcates per flow",flowAvarageCertificates )

let flowAvarageTenants = flowNumbers.avarageTenantsPerFlow(flows.flows)
console.log("average tenants per flow",flowAvarageTenants )