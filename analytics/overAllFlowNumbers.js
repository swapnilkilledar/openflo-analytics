//Write a function to calculate length of flows from flows.json file
function lengthOfFlows(flows) {
    return flows.length
}
//Write a function to calculate number of deleted flows
function lengthofDeletedFlows(flows) {
    let deletedFlows = flows.filter(flow => {
        return flow.is_deleted
    })
    return deletedFlows.length
}
// Write a function to calculate number of completed flows
function lengthofCompletedFlows(flows) {
    let completedFlows = flows.filter(flow => {
        return flow.is_completed
    })
    return completedFlows.length
}

//Write a function to calculate number of archived flows (use field is_archived)
function numberOfArchivedFlows(flows){
    let archivedFlows = flows.filter(flow => {
        return flow.is_archived
    })
   return  archivedFlows.length
}

//Write a function to calculate number of flows with more than 2 tenants
function moreThanTwoTenants(flows){
    let numOfFlow = flows.filter(flow => {
        return flow.tenants.length > 2
        })
        return numOfFlow.length
    }

//Write a function to calcualte number of flows with ast generated (use field is_ast_generated)
function numOfFlowsWithASTGen(flows){
    let numofAstGenFlow = flows.filter(flow =>{
        return flow.is_ast_generated
    })
    return numofAstGenFlow.length
}

//Write a function to calculate number of flows with nha generated
function numOfFLowsWithNhaGen(flows){
    let numofNhaFlow = flows.filter(flow =>{
        return flow.is_nha_generated
    })
    return numofNhaFlow.length
}

//Write a function to calculate number of flows used 
function numOfFlowUsed(flows){
    let numofFlows = flows.filter(flow =>{
        return flow.is_flow_used
    })
    return numofFlows.length
}

//Write a function to calculate number of flows created from reapit
function numOfFlowsReapit(flows){
    let numOfFlows = flows.filter(flow =>{
        return flow.reapit_tenancy_id
    })
    return numOfFlows.length
}
//Write a function to calculate number of flows added to proparty (use field is_added_to_property)
function numOfFlowsAddedProperty(flows){
    let numOfFlows = flows.filter(flow => {
        return flow.is_added_to_property
    })
        return numOfFlowsAddedProperty.length
}
// Write a function to calculate number of flows where landlords are empty
function flowWithEmptyLandlord(flows){
    let numofFlows = flows.filter(flow =>{
        return flow.open_flow_landlords = []
    })
        return numofFlows.length
}
//Write a function to calcualte number of flows where ast is generated and its signed (use field is_ast_signed)
function flowWithSignedAST(flows){
    let numofFlows = flows.filter(flow => {
        return flow.is_ast_signed == true
    })
    return numofFlows.length
}
//Write a function to calcualte number of flows where ast is generated and its not signed (use field is_ast_signed)
function flowWithNotSignedAST(flows){
    let numofFlows = flows.filter(flow => {
        return flow.is_ast_signed == false
    })
    return numofFlows.length
}

//Write a function to calculate number of flows where rental amount is greater than 5000 ( use field open_flow_rental_offer.rental_amount)
function flowswithRentalAmount(flows){
    let numOfFlows = flows.filter(flow => {
        if(flow.open_flow_rental_offer){
        let rentalAmount = flow.open_flow_rental_offer.rental_amount 
        return rentalAmount > 5000
        }
        else{
            return false;
        }
    })
    return numOfFlows.length
}

//   Write a function to calculate number of flows where IRP is required (use field open_flow_rental_offer.is_irp_required)
function flowsWithIrpRequired(flows){
    let numOfFlows = flows.filter(flow =>{
        if(flow.open_flow_rental_offer){
            let irp = flow.open_flow_rental_offer.is_irp_required
            return irp == true
        }
        else {
            return false
        }
    })
    return numOfFlows.length
}
//Write a function to calculate number of flows where IRP is not required (use field open_flow_rental_offer.is_irp_required)
function flowsWithIrpNotRequired(flows){
    let numOfFlows = flows.filter(flow =>{
        if(flow.open_flow_rental_offer){
            let irp = flow.open_flow_rental_offer.is_irp_required
            return irp == false
        }
        else {
            return true
        }
    })
    return numOfFlows.length
}
//   Write a function to calculate number of flows where tenant has the water responsibility (use field open_flow_rental_offer.tenant_water_responsibility)
function tenantWithWaterResponsibility(flows){
    let numOfFlows = flows.filter(flow=>{
        if(flow.open_flow_rental_offer){
            let res = flow.open_flow_rental_offer.tenant_water_responsibility
            return res == true 
        }
        else{
            return false
        }
    })
    return numOfFlows.length
}

//Write a function to calculate number of flows where agent has the water responsibility (use field open_flow_rental_offer.tenant_water_responsibility)
function agentWithWaterResponsibility(flows){
    let numOfFlows = flows.filter(flow=>{
        if(flow.open_flow_rental_offer){
            let responsibility = flow.open_flow_rental_offer.tenant_water_responsibility
            return responsibility == false
        }else{
            return true
        }
    })
    return numOfFlows.length
}
//Write a function to calculate number of flows with furnished property (use field open_flow_rental_offer.furnished)
function furnishedProperties(flows){
    let numOfFlows = flows.filter(flow =>{
        if(flows.open_flow_rental_offer){
            let furnish = flows.open_flow_rental_offer.furnished
            return furnish == true
        }else{
            return false
        }
    })
    return numOfFlows.length
}

//Write a function to calculate number of flows where number of certificates is greater than 2
function certificates(flows){
    let numOfFlow = flows.filter(flow => {
        if(flows.open_flow_certificates){  
    return flow.open_flow_certificates > 2
    }
    })
    return numOfFlow.length
}
// Write a function to calculate average rental amount per flow
function avarageRentalAmount(flows){
    let sum = 0
    flows.map(flow => {
        if (flow.open_flow_rental_offer) {
            let rentalAmount = flow.open_flow_rental_offer.rental_amount
            sum += rentalAmount
        }   
    })
    let average =  sum / flows.length
    console.log("length=",flows.length)
    return average.toFixed(2)
}

//Write a function to calculate average holding deposit per flow
function avarageHoldingDeposit(flows){
    let sum1= 0
    flows.map(flow =>{
        if(flow.open_flow_holding_deposit){
            let holdingAmount = flow.open_flow_holding_deposit.holding_desposit_amount
            sum1 += holdingAmount
        }
    })
    let average =  sum1 / flows.length
    console.log("length=",flows.length)
    return average.toFixed(2)
}

//Write a function to calculate average number of certificates per flow
function avarageCertificates(flows){
    let sum = 0
    flows.map(flow => {
    if(flow.open_flow_certificates) {
        let certificates = flow.open_flow_certificates.length
        return sum += certificates
    } 
})
    let averageOfCertificates = sum /flows.length
    return averageOfCertificates.toFixed(2)
}


//Write a function to calculate average number of tenants per flow
function avarageTenantsPerFlow(flows) {
    let sum = 0;
        let Tenants = flows.map(flow => {
            if(flow.tenants) {
                let ten = flow.tenants.length
                return sum +=ten
            }
        })
        return sum/flows.length
}








        
    




module.exports = {
    lengthOfFlows, 
    lengthofDeletedFlows,
    lengthofCompletedFlows,
    numberOfArchivedFlows,
    moreThanTwoTenants,
    numOfFlowsWithASTGen,
    numOfFLowsWithNhaGen,
    numOfFlowUsed,
    numOfFlowsReapit,
    numOfFlowsAddedProperty,
    flowWithEmptyLandlord,
    flowWithSignedAST,
    flowWithNotSignedAST,
    flowswithRentalAmount,
    flowsWithIrpRequired,
    flowsWithIrpNotRequired,
    tenantWithWaterResponsibility,
    agentWithWaterResponsibility,
    furnishedProperties,
    certificates,
    avarageRentalAmount,
    avarageHoldingDeposit,
    avarageCertificates,
    avarageTenantsPerFlow

}