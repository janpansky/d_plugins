/* eslint-disable */
/* THIS FILE WAS AUTO-GENERATED USING CATALOG EXPORTER; YOU SHOULD NOT EDIT THIS FILE; GENERATE TIME: 2023-03-10T14:51:57.057Z; */
// @ts-ignore ignore unused imports here if they happen (e.g. when there is no measure in the workspace)
import { newAttribute, newMeasure, IAttribute, IMeasure, IMeasureDefinition, idRef } from "@gooddata/sdk-model";

/**
 * Attribute Title: Equipment facility id
 * Attribute ID: equipmentfacilityid
 */
export const EquipmentFacilityId = {
  /**
   * Display Form Title: Equipment facility id
   * Display Form ID: equipmentfacilityid
   */
  Default: newAttribute("equipmentfacilityid")
  /**
   * Display Form Title: lat
   * Display Form ID: equipmentfacilityid.lat
   */,
  Lat: newAttribute("equipmentfacilityid.lat")
  /**
   * Display Form Title: lon
   * Display Form ID: equipmentfacilityid.lon
   */,
  Lon: newAttribute("equipmentfacilityid.lon"),
};
/**
 * Attribute Title: Equipment method
 * Attribute ID: equipmentmethod
 */
export const EquipmentMethod: IAttribute = newAttribute("equipmentmethod");
/**
 * Attribute Title: Month
 * Attribute ID: month
 */
export const Month: IAttribute = newAttribute("month");
/**
 * Attribute Title: Request input calculation name
 * Attribute ID: requestinputcalculationname
 */
export const RequestInputCalculationName: IAttribute = newAttribute("requestinputcalculationname");
/**
 * Attribute Title: Type
 * Attribute ID: type
 */
export const Type: IAttribute = newAttribute("type");
/**
 * Attribute Title: Year
 * Attribute ID: year
 */
export const Year: IAttribute = newAttribute("year");
/**
 * Attribute Title: Year month
 * Attribute ID: yearmonth
 */
export const YearMonth: IAttribute = newAttribute("yearmonth");
/**
 * Attribute Title: Year month
 * Attribute ID: dim_volume_data.yearmonth
 */
export const YearMonth_1: IAttribute = newAttribute("dim_volume_data.yearmonth");
/**
 * Attribute Title: Equipment facility name
 * Attribute ID: equipmentfacilityname
 */
export const EquipmentFacilityName: IAttribute = newAttribute("equipmentfacilityname");
/**
 * Attribute Title: Working interest
 * Attribute ID: workinginterest
 */
export const WorkingInterest: IAttribute = newAttribute("workinginterest");
/**
 * Fact Title: Emissions result flare c1
 * Fact ID: emissionsresultflarec1
 */
export const EmissionsResultFlareC1 = {
  /**
   * Fact Title: Emissions result flare c1
   * Fact ID: emissionsresultflarec1
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("emissionsresultflarec1", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Emissions result flare c1
   * Fact ID: emissionsresultflarec1
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("emissionsresultflarec1", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Emissions result flare c1
   * Fact ID: emissionsresultflarec1
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("emissionsresultflarec1", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Emissions result flare c1
   * Fact ID: emissionsresultflarec1
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("emissionsresultflarec1", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Emissions result flare c1
   * Fact ID: emissionsresultflarec1
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("emissionsresultflarec1", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Emissions result flare c1
   * Fact ID: emissionsresultflarec1
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("emissionsresultflarec1", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Emissions result flare co
 * Fact ID: emissionsresultflareco
 */
export const EmissionsResultFlareCo = {
  /**
   * Fact Title: Emissions result flare co
   * Fact ID: emissionsresultflareco
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("emissionsresultflareco", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Emissions result flare co
   * Fact ID: emissionsresultflareco
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("emissionsresultflareco", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Emissions result flare co
   * Fact ID: emissionsresultflareco
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("emissionsresultflareco", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Emissions result flare co
   * Fact ID: emissionsresultflareco
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("emissionsresultflareco", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Emissions result flare co
   * Fact ID: emissionsresultflareco
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("emissionsresultflareco", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Emissions result flare co
   * Fact ID: emissionsresultflareco
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("emissionsresultflareco", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Emissions result flare co2
 * Fact ID: emissionsresultflareco2
 */
export const EmissionsResultFlareCo2 = {
  /**
   * Fact Title: Emissions result flare co2
   * Fact ID: emissionsresultflareco2
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("emissionsresultflareco2", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Emissions result flare co2
   * Fact ID: emissionsresultflareco2
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("emissionsresultflareco2", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Emissions result flare co2
   * Fact ID: emissionsresultflareco2
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("emissionsresultflareco2", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Emissions result flare co2
   * Fact ID: emissionsresultflareco2
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("emissionsresultflareco2", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Emissions result flare co2
   * Fact ID: emissionsresultflareco2
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("emissionsresultflareco2", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Emissions result flare co2
   * Fact ID: emissionsresultflareco2
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("emissionsresultflareco2", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Emissions result flare co2 eq
 * Fact ID: emissionsresultflareco2eq
 */
export const EmissionsResultFlareCo2Eq = {
  /**
   * Fact Title: Emissions result flare co2 eq
   * Fact ID: emissionsresultflareco2eq
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("emissionsresultflareco2eq", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Emissions result flare co2 eq
   * Fact ID: emissionsresultflareco2eq
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("emissionsresultflareco2eq", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Emissions result flare co2 eq
   * Fact ID: emissionsresultflareco2eq
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("emissionsresultflareco2eq", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Emissions result flare co2 eq
   * Fact ID: emissionsresultflareco2eq
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("emissionsresultflareco2eq", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Emissions result flare co2 eq
   * Fact ID: emissionsresultflareco2eq
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("emissionsresultflareco2eq", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Emissions result flare co2 eq
   * Fact ID: emissionsresultflareco2eq
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("emissionsresultflareco2eq", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Emissions result flare n2o
 * Fact ID: emissionsresultflaren2o
 */
export const EmissionsResultFlareN2o = {
  /**
   * Fact Title: Emissions result flare n2o
   * Fact ID: emissionsresultflaren2o
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("emissionsresultflaren2o", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Emissions result flare n2o
   * Fact ID: emissionsresultflaren2o
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("emissionsresultflaren2o", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Emissions result flare n2o
   * Fact ID: emissionsresultflaren2o
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("emissionsresultflaren2o", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Emissions result flare n2o
   * Fact ID: emissionsresultflaren2o
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("emissionsresultflaren2o", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Emissions result flare n2o
   * Fact ID: emissionsresultflaren2o
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("emissionsresultflaren2o", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Emissions result flare n2o
   * Fact ID: emissionsresultflaren2o
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("emissionsresultflaren2o", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Emissions result flare vocs
 * Fact ID: emissionsresultflarevocs
 */
export const EmissionsResultFlareVocs = {
  /**
   * Fact Title: Emissions result flare vocs
   * Fact ID: emissionsresultflarevocs
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("emissionsresultflarevocs", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Emissions result flare vocs
   * Fact ID: emissionsresultflarevocs
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("emissionsresultflarevocs", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Emissions result flare vocs
   * Fact ID: emissionsresultflarevocs
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("emissionsresultflarevocs", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Emissions result flare vocs
   * Fact ID: emissionsresultflarevocs
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("emissionsresultflarevocs", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Emissions result flare vocs
   * Fact ID: emissionsresultflarevocs
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("emissionsresultflarevocs", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Emissions result flare vocs
   * Fact ID: emissionsresultflarevocs
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("emissionsresultflarevocs", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Emissions result fuel c1
 * Fact ID: emissionsresultfuelc1
 */
export const EmissionsResultFuelC1 = {
  /**
   * Fact Title: Emissions result fuel c1
   * Fact ID: emissionsresultfuelc1
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("emissionsresultfuelc1", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Emissions result fuel c1
   * Fact ID: emissionsresultfuelc1
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("emissionsresultfuelc1", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Emissions result fuel c1
   * Fact ID: emissionsresultfuelc1
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("emissionsresultfuelc1", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Emissions result fuel c1
   * Fact ID: emissionsresultfuelc1
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("emissionsresultfuelc1", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Emissions result fuel c1
   * Fact ID: emissionsresultfuelc1
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("emissionsresultfuelc1", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Emissions result fuel c1
   * Fact ID: emissionsresultfuelc1
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("emissionsresultfuelc1", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Emissions result fuel co
 * Fact ID: emissionsresultfuelco
 */
export const EmissionsResultFuelCo = {
  /**
   * Fact Title: Emissions result fuel co
   * Fact ID: emissionsresultfuelco
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("emissionsresultfuelco", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Emissions result fuel co
   * Fact ID: emissionsresultfuelco
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("emissionsresultfuelco", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Emissions result fuel co
   * Fact ID: emissionsresultfuelco
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("emissionsresultfuelco", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Emissions result fuel co
   * Fact ID: emissionsresultfuelco
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("emissionsresultfuelco", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Emissions result fuel co
   * Fact ID: emissionsresultfuelco
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("emissionsresultfuelco", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Emissions result fuel co
   * Fact ID: emissionsresultfuelco
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("emissionsresultfuelco", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Emissions result fuel co2
 * Fact ID: emissionsresultfuelco2
 */
export const EmissionsResultFuelCo2 = {
  /**
   * Fact Title: Emissions result fuel co2
   * Fact ID: emissionsresultfuelco2
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("emissionsresultfuelco2", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Emissions result fuel co2
   * Fact ID: emissionsresultfuelco2
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("emissionsresultfuelco2", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Emissions result fuel co2
   * Fact ID: emissionsresultfuelco2
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("emissionsresultfuelco2", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Emissions result fuel co2
   * Fact ID: emissionsresultfuelco2
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("emissionsresultfuelco2", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Emissions result fuel co2
   * Fact ID: emissionsresultfuelco2
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("emissionsresultfuelco2", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Emissions result fuel co2
   * Fact ID: emissionsresultfuelco2
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("emissionsresultfuelco2", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Emissions result fuel co2 eq
 * Fact ID: emissionsresultfuelco2eq
 */
export const EmissionsResultFuelCo2Eq = {
  /**
   * Fact Title: Emissions result fuel co2 eq
   * Fact ID: emissionsresultfuelco2eq
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("emissionsresultfuelco2eq", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Emissions result fuel co2 eq
   * Fact ID: emissionsresultfuelco2eq
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("emissionsresultfuelco2eq", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Emissions result fuel co2 eq
   * Fact ID: emissionsresultfuelco2eq
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("emissionsresultfuelco2eq", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Emissions result fuel co2 eq
   * Fact ID: emissionsresultfuelco2eq
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("emissionsresultfuelco2eq", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Emissions result fuel co2 eq
   * Fact ID: emissionsresultfuelco2eq
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("emissionsresultfuelco2eq", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Emissions result fuel co2 eq
   * Fact ID: emissionsresultfuelco2eq
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("emissionsresultfuelco2eq", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Emissions result fuel n2o
 * Fact ID: emissionsresultfueln2o
 */
export const EmissionsResultFuelN2o = {
  /**
   * Fact Title: Emissions result fuel n2o
   * Fact ID: emissionsresultfueln2o
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("emissionsresultfueln2o", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Emissions result fuel n2o
   * Fact ID: emissionsresultfueln2o
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("emissionsresultfueln2o", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Emissions result fuel n2o
   * Fact ID: emissionsresultfueln2o
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("emissionsresultfueln2o", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Emissions result fuel n2o
   * Fact ID: emissionsresultfueln2o
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("emissionsresultfueln2o", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Emissions result fuel n2o
   * Fact ID: emissionsresultfueln2o
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("emissionsresultfueln2o", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Emissions result fuel n2o
   * Fact ID: emissionsresultfueln2o
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("emissionsresultfueln2o", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Emissions result fuel vocs
 * Fact ID: emissionsresultfuelvocs
 */
export const EmissionsResultFuelVocs = {
  /**
   * Fact Title: Emissions result fuel vocs
   * Fact ID: emissionsresultfuelvocs
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("emissionsresultfuelvocs", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Emissions result fuel vocs
   * Fact ID: emissionsresultfuelvocs
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("emissionsresultfuelvocs", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Emissions result fuel vocs
   * Fact ID: emissionsresultfuelvocs
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("emissionsresultfuelvocs", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Emissions result fuel vocs
   * Fact ID: emissionsresultfuelvocs
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("emissionsresultfuelvocs", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Emissions result fuel vocs
   * Fact ID: emissionsresultfuelvocs
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("emissionsresultfuelvocs", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Emissions result fuel vocs
   * Fact ID: emissionsresultfuelvocs
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("emissionsresultfuelvocs", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Emissions result fugitive c1
 * Fact ID: emissionsresultfugitivec1
 */
export const EmissionsResultFugitiveC1 = {
  /**
   * Fact Title: Emissions result fugitive c1
   * Fact ID: emissionsresultfugitivec1
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("emissionsresultfugitivec1", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Emissions result fugitive c1
   * Fact ID: emissionsresultfugitivec1
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("emissionsresultfugitivec1", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Emissions result fugitive c1
   * Fact ID: emissionsresultfugitivec1
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("emissionsresultfugitivec1", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Emissions result fugitive c1
   * Fact ID: emissionsresultfugitivec1
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("emissionsresultfugitivec1", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Emissions result fugitive c1
   * Fact ID: emissionsresultfugitivec1
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("emissionsresultfugitivec1", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Emissions result fugitive c1
   * Fact ID: emissionsresultfugitivec1
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("emissionsresultfugitivec1", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Emissions result fugitive co
 * Fact ID: emissionsresultfugitiveco
 */
export const EmissionsResultFugitiveCo = {
  /**
   * Fact Title: Emissions result fugitive co
   * Fact ID: emissionsresultfugitiveco
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("emissionsresultfugitiveco", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Emissions result fugitive co
   * Fact ID: emissionsresultfugitiveco
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("emissionsresultfugitiveco", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Emissions result fugitive co
   * Fact ID: emissionsresultfugitiveco
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("emissionsresultfugitiveco", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Emissions result fugitive co
   * Fact ID: emissionsresultfugitiveco
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("emissionsresultfugitiveco", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Emissions result fugitive co
   * Fact ID: emissionsresultfugitiveco
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("emissionsresultfugitiveco", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Emissions result fugitive co
   * Fact ID: emissionsresultfugitiveco
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("emissionsresultfugitiveco", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Emissions result fugitive co2
 * Fact ID: emissionsresultfugitiveco2
 */
export const EmissionsResultFugitiveCo2 = {
  /**
   * Fact Title: Emissions result fugitive co2
   * Fact ID: emissionsresultfugitiveco2
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("emissionsresultfugitiveco2", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Emissions result fugitive co2
   * Fact ID: emissionsresultfugitiveco2
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("emissionsresultfugitiveco2", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Emissions result fugitive co2
   * Fact ID: emissionsresultfugitiveco2
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("emissionsresultfugitiveco2", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Emissions result fugitive co2
   * Fact ID: emissionsresultfugitiveco2
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("emissionsresultfugitiveco2", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Emissions result fugitive co2
   * Fact ID: emissionsresultfugitiveco2
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("emissionsresultfugitiveco2", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Emissions result fugitive co2
   * Fact ID: emissionsresultfugitiveco2
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("emissionsresultfugitiveco2", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Emissions result fugitive co2 eq
 * Fact ID: emissionsresultfugitiveco2eq
 */
export const EmissionsResultFugitiveCo2Eq = {
  /**
   * Fact Title: Emissions result fugitive co2 eq
   * Fact ID: emissionsresultfugitiveco2eq
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("emissionsresultfugitiveco2eq", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Emissions result fugitive co2 eq
   * Fact ID: emissionsresultfugitiveco2eq
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("emissionsresultfugitiveco2eq", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Emissions result fugitive co2 eq
   * Fact ID: emissionsresultfugitiveco2eq
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("emissionsresultfugitiveco2eq", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Emissions result fugitive co2 eq
   * Fact ID: emissionsresultfugitiveco2eq
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("emissionsresultfugitiveco2eq", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Emissions result fugitive co2 eq
   * Fact ID: emissionsresultfugitiveco2eq
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("emissionsresultfugitiveco2eq", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Emissions result fugitive co2 eq
   * Fact ID: emissionsresultfugitiveco2eq
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("emissionsresultfugitiveco2eq", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Emissions result fugitive n2o
 * Fact ID: emissionsresultfugitiven2o
 */
export const EmissionsResultFugitiveN2o = {
  /**
   * Fact Title: Emissions result fugitive n2o
   * Fact ID: emissionsresultfugitiven2o
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("emissionsresultfugitiven2o", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Emissions result fugitive n2o
   * Fact ID: emissionsresultfugitiven2o
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("emissionsresultfugitiven2o", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Emissions result fugitive n2o
   * Fact ID: emissionsresultfugitiven2o
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("emissionsresultfugitiven2o", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Emissions result fugitive n2o
   * Fact ID: emissionsresultfugitiven2o
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("emissionsresultfugitiven2o", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Emissions result fugitive n2o
   * Fact ID: emissionsresultfugitiven2o
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("emissionsresultfugitiven2o", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Emissions result fugitive n2o
   * Fact ID: emissionsresultfugitiven2o
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("emissionsresultfugitiven2o", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Emissions result fugitive vocs
 * Fact ID: emissionsresultfugitivevocs
 */
export const EmissionsResultFugitiveVocs = {
  /**
   * Fact Title: Emissions result fugitive vocs
   * Fact ID: emissionsresultfugitivevocs
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("emissionsresultfugitivevocs", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Emissions result fugitive vocs
   * Fact ID: emissionsresultfugitivevocs
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("emissionsresultfugitivevocs", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Emissions result fugitive vocs
   * Fact ID: emissionsresultfugitivevocs
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("emissionsresultfugitivevocs", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Emissions result fugitive vocs
   * Fact ID: emissionsresultfugitivevocs
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("emissionsresultfugitivevocs", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Emissions result fugitive vocs
   * Fact ID: emissionsresultfugitivevocs
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("emissionsresultfugitivevocs", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Emissions result fugitive vocs
   * Fact ID: emissionsresultfugitivevocs
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("emissionsresultfugitivevocs", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Emissions result recovered c1
 * Fact ID: emissionsresultrecoveredc1
 */
export const EmissionsResultRecoveredC1 = {
  /**
   * Fact Title: Emissions result recovered c1
   * Fact ID: emissionsresultrecoveredc1
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("emissionsresultrecoveredc1", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Emissions result recovered c1
   * Fact ID: emissionsresultrecoveredc1
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("emissionsresultrecoveredc1", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Emissions result recovered c1
   * Fact ID: emissionsresultrecoveredc1
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("emissionsresultrecoveredc1", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Emissions result recovered c1
   * Fact ID: emissionsresultrecoveredc1
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("emissionsresultrecoveredc1", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Emissions result recovered c1
   * Fact ID: emissionsresultrecoveredc1
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("emissionsresultrecoveredc1", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Emissions result recovered c1
   * Fact ID: emissionsresultrecoveredc1
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("emissionsresultrecoveredc1", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Emissions result recovered co
 * Fact ID: emissionsresultrecoveredco
 */
export const EmissionsResultRecoveredCo = {
  /**
   * Fact Title: Emissions result recovered co
   * Fact ID: emissionsresultrecoveredco
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("emissionsresultrecoveredco", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Emissions result recovered co
   * Fact ID: emissionsresultrecoveredco
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("emissionsresultrecoveredco", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Emissions result recovered co
   * Fact ID: emissionsresultrecoveredco
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("emissionsresultrecoveredco", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Emissions result recovered co
   * Fact ID: emissionsresultrecoveredco
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("emissionsresultrecoveredco", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Emissions result recovered co
   * Fact ID: emissionsresultrecoveredco
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("emissionsresultrecoveredco", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Emissions result recovered co
   * Fact ID: emissionsresultrecoveredco
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("emissionsresultrecoveredco", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Emissions result recovered co2
 * Fact ID: emissionsresultrecoveredco2
 */
export const EmissionsResultRecoveredCo2 = {
  /**
   * Fact Title: Emissions result recovered co2
   * Fact ID: emissionsresultrecoveredco2
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("emissionsresultrecoveredco2", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Emissions result recovered co2
   * Fact ID: emissionsresultrecoveredco2
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("emissionsresultrecoveredco2", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Emissions result recovered co2
   * Fact ID: emissionsresultrecoveredco2
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("emissionsresultrecoveredco2", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Emissions result recovered co2
   * Fact ID: emissionsresultrecoveredco2
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("emissionsresultrecoveredco2", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Emissions result recovered co2
   * Fact ID: emissionsresultrecoveredco2
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("emissionsresultrecoveredco2", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Emissions result recovered co2
   * Fact ID: emissionsresultrecoveredco2
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("emissionsresultrecoveredco2", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Emissions result recovered co2 eq
 * Fact ID: emissionsresultrecoveredco2eq
 */
export const EmissionsResultRecoveredCo2Eq = {
  /**
   * Fact Title: Emissions result recovered co2 eq
   * Fact ID: emissionsresultrecoveredco2eq
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("emissionsresultrecoveredco2eq", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Emissions result recovered co2 eq
   * Fact ID: emissionsresultrecoveredco2eq
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("emissionsresultrecoveredco2eq", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Emissions result recovered co2 eq
   * Fact ID: emissionsresultrecoveredco2eq
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("emissionsresultrecoveredco2eq", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Emissions result recovered co2 eq
   * Fact ID: emissionsresultrecoveredco2eq
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("emissionsresultrecoveredco2eq", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Emissions result recovered co2 eq
   * Fact ID: emissionsresultrecoveredco2eq
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("emissionsresultrecoveredco2eq", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Emissions result recovered co2 eq
   * Fact ID: emissionsresultrecoveredco2eq
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("emissionsresultrecoveredco2eq", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Emissions result recovered n2o
 * Fact ID: emissionsresultrecoveredn2o
 */
export const EmissionsResultRecoveredN2o = {
  /**
   * Fact Title: Emissions result recovered n2o
   * Fact ID: emissionsresultrecoveredn2o
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("emissionsresultrecoveredn2o", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Emissions result recovered n2o
   * Fact ID: emissionsresultrecoveredn2o
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("emissionsresultrecoveredn2o", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Emissions result recovered n2o
   * Fact ID: emissionsresultrecoveredn2o
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("emissionsresultrecoveredn2o", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Emissions result recovered n2o
   * Fact ID: emissionsresultrecoveredn2o
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("emissionsresultrecoveredn2o", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Emissions result recovered n2o
   * Fact ID: emissionsresultrecoveredn2o
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("emissionsresultrecoveredn2o", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Emissions result recovered n2o
   * Fact ID: emissionsresultrecoveredn2o
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("emissionsresultrecoveredn2o", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Emissions result recovered vocs
 * Fact ID: emissionsresultrecoveredvocs
 */
export const EmissionsResultRecoveredVocs = {
  /**
   * Fact Title: Emissions result recovered vocs
   * Fact ID: emissionsresultrecoveredvocs
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("emissionsresultrecoveredvocs", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Emissions result recovered vocs
   * Fact ID: emissionsresultrecoveredvocs
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("emissionsresultrecoveredvocs", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Emissions result recovered vocs
   * Fact ID: emissionsresultrecoveredvocs
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("emissionsresultrecoveredvocs", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Emissions result recovered vocs
   * Fact ID: emissionsresultrecoveredvocs
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("emissionsresultrecoveredvocs", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Emissions result recovered vocs
   * Fact ID: emissionsresultrecoveredvocs
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("emissionsresultrecoveredvocs", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Emissions result recovered vocs
   * Fact ID: emissionsresultrecoveredvocs
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("emissionsresultrecoveredvocs", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Emissions result sequestered c1
 * Fact ID: emissionsresultsequesteredc1
 */
export const EmissionsResultSequesteredC1 = {
  /**
   * Fact Title: Emissions result sequestered c1
   * Fact ID: emissionsresultsequesteredc1
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("emissionsresultsequesteredc1", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Emissions result sequestered c1
   * Fact ID: emissionsresultsequesteredc1
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("emissionsresultsequesteredc1", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Emissions result sequestered c1
   * Fact ID: emissionsresultsequesteredc1
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("emissionsresultsequesteredc1", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Emissions result sequestered c1
   * Fact ID: emissionsresultsequesteredc1
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("emissionsresultsequesteredc1", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Emissions result sequestered c1
   * Fact ID: emissionsresultsequesteredc1
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("emissionsresultsequesteredc1", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Emissions result sequestered c1
   * Fact ID: emissionsresultsequesteredc1
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("emissionsresultsequesteredc1", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Emissions result sequestered co
 * Fact ID: emissionsresultsequesteredco
 */
export const EmissionsResultSequesteredCo = {
  /**
   * Fact Title: Emissions result sequestered co
   * Fact ID: emissionsresultsequesteredco
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("emissionsresultsequesteredco", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Emissions result sequestered co
   * Fact ID: emissionsresultsequesteredco
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("emissionsresultsequesteredco", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Emissions result sequestered co
   * Fact ID: emissionsresultsequesteredco
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("emissionsresultsequesteredco", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Emissions result sequestered co
   * Fact ID: emissionsresultsequesteredco
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("emissionsresultsequesteredco", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Emissions result sequestered co
   * Fact ID: emissionsresultsequesteredco
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("emissionsresultsequesteredco", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Emissions result sequestered co
   * Fact ID: emissionsresultsequesteredco
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("emissionsresultsequesteredco", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Emissions result sequestered co2
 * Fact ID: emissionsresultsequesteredco2
 */
export const EmissionsResultSequesteredCo2 = {
  /**
   * Fact Title: Emissions result sequestered co2
   * Fact ID: emissionsresultsequesteredco2
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("emissionsresultsequesteredco2", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Emissions result sequestered co2
   * Fact ID: emissionsresultsequesteredco2
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("emissionsresultsequesteredco2", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Emissions result sequestered co2
   * Fact ID: emissionsresultsequesteredco2
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("emissionsresultsequesteredco2", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Emissions result sequestered co2
   * Fact ID: emissionsresultsequesteredco2
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("emissionsresultsequesteredco2", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Emissions result sequestered co2
   * Fact ID: emissionsresultsequesteredco2
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("emissionsresultsequesteredco2", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Emissions result sequestered co2
   * Fact ID: emissionsresultsequesteredco2
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("emissionsresultsequesteredco2", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Emissions result sequestered co2 eq
 * Fact ID: emissionsresultsequesteredco2eq
 */
export const EmissionsResultSequesteredCo2Eq = {
  /**
   * Fact Title: Emissions result sequestered co2 eq
   * Fact ID: emissionsresultsequesteredco2eq
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("emissionsresultsequesteredco2eq", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Emissions result sequestered co2 eq
   * Fact ID: emissionsresultsequesteredco2eq
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("emissionsresultsequesteredco2eq", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Emissions result sequestered co2 eq
   * Fact ID: emissionsresultsequesteredco2eq
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("emissionsresultsequesteredco2eq", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Emissions result sequestered co2 eq
   * Fact ID: emissionsresultsequesteredco2eq
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("emissionsresultsequesteredco2eq", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Emissions result sequestered co2 eq
   * Fact ID: emissionsresultsequesteredco2eq
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("emissionsresultsequesteredco2eq", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Emissions result sequestered co2 eq
   * Fact ID: emissionsresultsequesteredco2eq
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("emissionsresultsequesteredco2eq", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Emissions result sequestered n2o
 * Fact ID: emissionsresultsequesteredn2o
 */
export const EmissionsResultSequesteredN2o = {
  /**
   * Fact Title: Emissions result sequestered n2o
   * Fact ID: emissionsresultsequesteredn2o
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("emissionsresultsequesteredn2o", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Emissions result sequestered n2o
   * Fact ID: emissionsresultsequesteredn2o
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("emissionsresultsequesteredn2o", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Emissions result sequestered n2o
   * Fact ID: emissionsresultsequesteredn2o
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("emissionsresultsequesteredn2o", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Emissions result sequestered n2o
   * Fact ID: emissionsresultsequesteredn2o
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("emissionsresultsequesteredn2o", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Emissions result sequestered n2o
   * Fact ID: emissionsresultsequesteredn2o
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("emissionsresultsequesteredn2o", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Emissions result sequestered n2o
   * Fact ID: emissionsresultsequesteredn2o
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("emissionsresultsequesteredn2o", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Emissions result sequestered vocs
 * Fact ID: emissionsresultsequesteredvocs
 */
export const EmissionsResultSequesteredVocs = {
  /**
   * Fact Title: Emissions result sequestered vocs
   * Fact ID: emissionsresultsequesteredvocs
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("emissionsresultsequesteredvocs", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Emissions result sequestered vocs
   * Fact ID: emissionsresultsequesteredvocs
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("emissionsresultsequesteredvocs", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Emissions result sequestered vocs
   * Fact ID: emissionsresultsequesteredvocs
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("emissionsresultsequesteredvocs", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Emissions result sequestered vocs
   * Fact ID: emissionsresultsequesteredvocs
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("emissionsresultsequesteredvocs", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Emissions result sequestered vocs
   * Fact ID: emissionsresultsequesteredvocs
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("emissionsresultsequesteredvocs", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Emissions result sequestered vocs
   * Fact ID: emissionsresultsequesteredvocs
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("emissionsresultsequesteredvocs", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Emissions result total c1
 * Fact ID: emissionsresulttotalc1
 */
export const EmissionsResultTotalC1 = {
  /**
   * Fact Title: Emissions result total c1
   * Fact ID: emissionsresulttotalc1
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("emissionsresulttotalc1", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Emissions result total c1
   * Fact ID: emissionsresulttotalc1
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("emissionsresulttotalc1", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Emissions result total c1
   * Fact ID: emissionsresulttotalc1
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("emissionsresulttotalc1", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Emissions result total c1
   * Fact ID: emissionsresulttotalc1
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("emissionsresulttotalc1", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Emissions result total c1
   * Fact ID: emissionsresulttotalc1
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("emissionsresulttotalc1", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Emissions result total c1
   * Fact ID: emissionsresulttotalc1
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("emissionsresulttotalc1", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Emissions result total co
 * Fact ID: emissionsresulttotalco
 */
export const EmissionsResultTotalCo = {
  /**
   * Fact Title: Emissions result total co
   * Fact ID: emissionsresulttotalco
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("emissionsresulttotalco", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Emissions result total co
   * Fact ID: emissionsresulttotalco
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("emissionsresulttotalco", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Emissions result total co
   * Fact ID: emissionsresulttotalco
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("emissionsresulttotalco", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Emissions result total co
   * Fact ID: emissionsresulttotalco
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("emissionsresulttotalco", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Emissions result total co
   * Fact ID: emissionsresulttotalco
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("emissionsresulttotalco", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Emissions result total co
   * Fact ID: emissionsresulttotalco
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("emissionsresulttotalco", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Emissions result total co2
 * Fact ID: emissionsresulttotalco2
 */
export const EmissionsResultTotalCo2 = {
  /**
   * Fact Title: Emissions result total co2
   * Fact ID: emissionsresulttotalco2
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("emissionsresulttotalco2", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Emissions result total co2
   * Fact ID: emissionsresulttotalco2
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("emissionsresulttotalco2", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Emissions result total co2
   * Fact ID: emissionsresulttotalco2
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("emissionsresulttotalco2", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Emissions result total co2
   * Fact ID: emissionsresulttotalco2
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("emissionsresulttotalco2", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Emissions result total co2
   * Fact ID: emissionsresulttotalco2
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("emissionsresulttotalco2", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Emissions result total co2
   * Fact ID: emissionsresulttotalco2
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("emissionsresulttotalco2", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Emissions result total co2 eq
 * Fact ID: emissionsresulttotalco2eq
 */
export const EmissionsResultTotalCo2Eq = {
  /**
   * Fact Title: Emissions result total co2 eq
   * Fact ID: emissionsresulttotalco2eq
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("emissionsresulttotalco2eq", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Emissions result total co2 eq
   * Fact ID: emissionsresulttotalco2eq
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("emissionsresulttotalco2eq", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Emissions result total co2 eq
   * Fact ID: emissionsresulttotalco2eq
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("emissionsresulttotalco2eq", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Emissions result total co2 eq
   * Fact ID: emissionsresulttotalco2eq
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("emissionsresulttotalco2eq", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Emissions result total co2 eq
   * Fact ID: emissionsresulttotalco2eq
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("emissionsresulttotalco2eq", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Emissions result total co2 eq
   * Fact ID: emissionsresulttotalco2eq
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("emissionsresulttotalco2eq", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Emissions result total n2o
 * Fact ID: emissionsresulttotaln2o
 */
export const EmissionsResultTotalN2o = {
  /**
   * Fact Title: Emissions result total n2o
   * Fact ID: emissionsresulttotaln2o
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("emissionsresulttotaln2o", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Emissions result total n2o
   * Fact ID: emissionsresulttotaln2o
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("emissionsresulttotaln2o", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Emissions result total n2o
   * Fact ID: emissionsresulttotaln2o
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("emissionsresulttotaln2o", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Emissions result total n2o
   * Fact ID: emissionsresulttotaln2o
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("emissionsresulttotaln2o", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Emissions result total n2o
   * Fact ID: emissionsresulttotaln2o
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("emissionsresulttotaln2o", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Emissions result total n2o
   * Fact ID: emissionsresulttotaln2o
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("emissionsresulttotaln2o", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Emissions result total vocs
 * Fact ID: emissionsresulttotalvocs
 */
export const EmissionsResultTotalVocs = {
  /**
   * Fact Title: Emissions result total vocs
   * Fact ID: emissionsresulttotalvocs
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("emissionsresulttotalvocs", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Emissions result total vocs
   * Fact ID: emissionsresulttotalvocs
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("emissionsresulttotalvocs", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Emissions result total vocs
   * Fact ID: emissionsresulttotalvocs
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("emissionsresulttotalvocs", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Emissions result total vocs
   * Fact ID: emissionsresulttotalvocs
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("emissionsresulttotalvocs", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Emissions result total vocs
   * Fact ID: emissionsresulttotalvocs
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("emissionsresulttotalvocs", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Emissions result total vocs
   * Fact ID: emissionsresulttotalvocs
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("emissionsresulttotalvocs", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Emissions result vent c1
 * Fact ID: emissionsresultventc1
 */
export const EmissionsResultVentC1 = {
  /**
   * Fact Title: Emissions result vent c1
   * Fact ID: emissionsresultventc1
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("emissionsresultventc1", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Emissions result vent c1
   * Fact ID: emissionsresultventc1
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("emissionsresultventc1", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Emissions result vent c1
   * Fact ID: emissionsresultventc1
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("emissionsresultventc1", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Emissions result vent c1
   * Fact ID: emissionsresultventc1
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("emissionsresultventc1", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Emissions result vent c1
   * Fact ID: emissionsresultventc1
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("emissionsresultventc1", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Emissions result vent c1
   * Fact ID: emissionsresultventc1
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("emissionsresultventc1", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Emissions result vent co
 * Fact ID: emissionsresultventco
 */
export const EmissionsResultVentCo = {
  /**
   * Fact Title: Emissions result vent co
   * Fact ID: emissionsresultventco
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("emissionsresultventco", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Emissions result vent co
   * Fact ID: emissionsresultventco
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("emissionsresultventco", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Emissions result vent co
   * Fact ID: emissionsresultventco
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("emissionsresultventco", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Emissions result vent co
   * Fact ID: emissionsresultventco
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("emissionsresultventco", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Emissions result vent co
   * Fact ID: emissionsresultventco
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("emissionsresultventco", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Emissions result vent co
   * Fact ID: emissionsresultventco
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("emissionsresultventco", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Emissions result vent co2
 * Fact ID: emissionsresultventco2
 */
export const EmissionsResultVentCo2 = {
  /**
   * Fact Title: Emissions result vent co2
   * Fact ID: emissionsresultventco2
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("emissionsresultventco2", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Emissions result vent co2
   * Fact ID: emissionsresultventco2
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("emissionsresultventco2", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Emissions result vent co2
   * Fact ID: emissionsresultventco2
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("emissionsresultventco2", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Emissions result vent co2
   * Fact ID: emissionsresultventco2
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("emissionsresultventco2", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Emissions result vent co2
   * Fact ID: emissionsresultventco2
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("emissionsresultventco2", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Emissions result vent co2
   * Fact ID: emissionsresultventco2
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("emissionsresultventco2", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Emissions result vent co2 eq
 * Fact ID: emissionsresultventco2eq
 */
export const EmissionsResultVentCo2Eq = {
  /**
   * Fact Title: Emissions result vent co2 eq
   * Fact ID: emissionsresultventco2eq
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("emissionsresultventco2eq", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Emissions result vent co2 eq
   * Fact ID: emissionsresultventco2eq
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("emissionsresultventco2eq", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Emissions result vent co2 eq
   * Fact ID: emissionsresultventco2eq
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("emissionsresultventco2eq", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Emissions result vent co2 eq
   * Fact ID: emissionsresultventco2eq
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("emissionsresultventco2eq", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Emissions result vent co2 eq
   * Fact ID: emissionsresultventco2eq
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("emissionsresultventco2eq", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Emissions result vent co2 eq
   * Fact ID: emissionsresultventco2eq
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("emissionsresultventco2eq", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Emissions result vent n2o
 * Fact ID: emissionsresultventn2o
 */
export const EmissionsResultVentN2o = {
  /**
   * Fact Title: Emissions result vent n2o
   * Fact ID: emissionsresultventn2o
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("emissionsresultventn2o", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Emissions result vent n2o
   * Fact ID: emissionsresultventn2o
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("emissionsresultventn2o", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Emissions result vent n2o
   * Fact ID: emissionsresultventn2o
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("emissionsresultventn2o", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Emissions result vent n2o
   * Fact ID: emissionsresultventn2o
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("emissionsresultventn2o", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Emissions result vent n2o
   * Fact ID: emissionsresultventn2o
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("emissionsresultventn2o", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Emissions result vent n2o
   * Fact ID: emissionsresultventn2o
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("emissionsresultventn2o", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Emissions result vent vocs
 * Fact ID: emissionsresultventvocs
 */
export const EmissionsResultVentVocs = {
  /**
   * Fact Title: Emissions result vent vocs
   * Fact ID: emissionsresultventvocs
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("emissionsresultventvocs", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Emissions result vent vocs
   * Fact ID: emissionsresultventvocs
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("emissionsresultventvocs", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Emissions result vent vocs
   * Fact ID: emissionsresultventvocs
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("emissionsresultventvocs", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Emissions result vent vocs
   * Fact ID: emissionsresultventvocs
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("emissionsresultventvocs", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Emissions result vent vocs
   * Fact ID: emissionsresultventvocs
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("emissionsresultventvocs", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Emissions result vent vocs
   * Fact ID: emissionsresultventvocs
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("emissionsresultventvocs", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Ci
 * Fact ID: ci
 */
export const Ci = {
  /**
   * Fact Title: Ci
   * Fact ID: ci
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("ci", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Ci
   * Fact ID: ci
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("ci", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Ci
   * Fact ID: ci
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("ci", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Ci
   * Fact ID: ci
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("ci", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Ci
   * Fact ID: ci
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("ci", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Ci
   * Fact ID: ci
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("ci", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Fuel vol
 * Fact ID: fuelvol
 */
export const FuelVol = {
  /**
   * Fact Title: Fuel vol
   * Fact ID: fuelvol
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("fuelvol", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Fuel vol
   * Fact ID: fuelvol
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("fuelvol", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Fuel vol
   * Fact ID: fuelvol
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("fuelvol", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Fuel vol
   * Fact ID: fuelvol
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("fuelvol", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Fuel vol
   * Fact ID: fuelvol
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("fuelvol", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Fuel vol
   * Fact ID: fuelvol
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("fuelvol", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Mi
 * Fact ID: mi
 */
export const Mi = {
  /**
   * Fact Title: Mi
   * Fact ID: mi
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("mi", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Mi
   * Fact ID: mi
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("mi", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Mi
   * Fact ID: mi
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("mi", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Mi
   * Fact ID: mi
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("mi", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Mi
   * Fact ID: mi
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("mi", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Mi
   * Fact ID: mi
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("mi", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Reciept vol
 * Fact ID: recieptvol
 */
export const RecieptVol = {
  /**
   * Fact Title: Reciept vol
   * Fact ID: recieptvol
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("recieptvol", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Reciept vol
   * Fact ID: recieptvol
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("recieptvol", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Reciept vol
   * Fact ID: recieptvol
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("recieptvol", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Reciept vol
   * Fact ID: recieptvol
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("recieptvol", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Reciept vol
   * Fact ID: recieptvol
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("recieptvol", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Reciept vol
   * Fact ID: recieptvol
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("recieptvol", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Disp vol
 * Fact ID: dispvol
 */
export const DispVol = {
  /**
   * Fact Title: Disp vol
   * Fact ID: dispvol
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("dispvol", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Disp vol
   * Fact ID: dispvol
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("dispvol", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Disp vol
   * Fact ID: dispvol
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("dispvol", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Disp vol
   * Fact ID: dispvol
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("dispvol", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Disp vol
   * Fact ID: dispvol
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("dispvol", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Disp vol
   * Fact ID: dispvol
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("dispvol", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Attribute Title: Datetime - Date
 * Attribute ID: datetime.day
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DatetimeDate: IAttribute = newAttribute("datetime.day");
/**
 * Attribute Title: Datetime - Month/Year
 * Attribute ID: datetime.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DatetimeMonthYear: IAttribute = newAttribute("datetime.month");
/**
 * Attribute Title: Datetime - Quarter/Year
 * Attribute ID: datetime.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DatetimeQuarterYear: IAttribute = newAttribute("datetime.quarter");
/**
 * Attribute Title: Datetime - Week/Year
 * Attribute ID: datetime.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DatetimeWeekYear: IAttribute = newAttribute("datetime.week");
/**
 * Attribute Title: Datetime - Year
 * Attribute ID: datetime.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DatetimeYear: IAttribute = newAttribute("datetime.year");
/** Available Date Data Sets */
export const DateDatasets = {
  /**
   * Date Data Set Title: Datetime
   * Date Data Set ID: datetime
   */
  Datetime: {
    ref: idRef("datetime", "dataSet"),
    identifier: "datetime"
    /**
     * Date Attribute: Datetime - Date
     * Date Attribute ID: datetime.day
     */,
    DatetimeDate: {
      ref: idRef("datetime.day", "attribute"),
      identifier: "datetime.day"
      /**
       * Display Form Title: Datetime - Date
       * Display Form ID: datetime.day
       */,
      Default: newAttribute("datetime.day"),
    }
    /**
     * Date Attribute: Datetime - Month/Year
     * Date Attribute ID: datetime.month
     */,
    DatetimeMonthYear: {
      ref: idRef("datetime.month", "attribute"),
      identifier: "datetime.month"
      /**
       * Display Form Title: Datetime - Month/Year
       * Display Form ID: datetime.month
       */,
      Default: newAttribute("datetime.month"),
    }
    /**
     * Date Attribute: Datetime - Quarter/Year
     * Date Attribute ID: datetime.quarter
     */,
    DatetimeQuarterYear: {
      ref: idRef("datetime.quarter", "attribute"),
      identifier: "datetime.quarter"
      /**
       * Display Form Title: Datetime - Quarter/Year
       * Display Form ID: datetime.quarter
       */,
      Default: newAttribute("datetime.quarter"),
    }
    /**
     * Date Attribute: Datetime - Week/Year
     * Date Attribute ID: datetime.week
     */,
    DatetimeWeekYear: {
      ref: idRef("datetime.week", "attribute"),
      identifier: "datetime.week"
      /**
       * Display Form Title: Datetime - Week/Year
       * Display Form ID: datetime.week
       */,
      Default: newAttribute("datetime.week"),
    }
    /**
     * Date Attribute: Datetime - Year
     * Date Attribute ID: datetime.year
     */,
    DatetimeYear: {
      ref: idRef("datetime.year", "attribute"),
      identifier: "datetime.year"
      /**
       * Display Form Title: Datetime - Year
       * Display Form ID: datetime.year
       */,
      Default: newAttribute("datetime.year"),
    },
  },
};
export const Insights = {
  /**
   * Insight Title: Co2e emissions
   * Insight ID: e0b0e796-01a0-43fd-b18d-baf6a697a818
   */
  Co2eEmissions: "e0b0e796-01a0-43fd-b18d-baf6a697a818"
  /**
   * Insight Title: 2022 CH4 Emissions (mt)
   * Insight ID: c915e5a9-d521-45e0-aac9-45154939de0c
   */,
  _2022CH4EmissionsMt: "c915e5a9-d521-45e0-aac9-45154939de0c"
  /**
   * Insight Title: 2022 total CH4
   * Insight ID: 2a57ae3c-d15f-447c-a19a-21e1d66a40a9
   */,
  _2022TotalCH4: "2a57ae3c-d15f-447c-a19a-21e1d66a40a9"
  /**
   * Insight Title: 2022 total Co2e (mt)
   * Insight ID: bb5c0845-08dc-44ce-919a-9bd88a9fccf8
   */,
  _2022TotalCo2eMt: "bb5c0845-08dc-44ce-919a-9bd88a9fccf8"
  /**
   * Insight Title: Facility map
   * Insight ID: 14f19210-786f-4ecb-9191-3f8cd4b376e4
   */,
  FacilityMap: "14f19210-786f-4ecb-9191-3f8cd4b376e4"
  /**
   * Insight Title: Facility map CH4
   * Insight ID: ba3b0010-6d6a-4ee3-8e34-f74236bd5d84
   */,
  FacilityMapCH4: "ba3b0010-6d6a-4ee3-8e34-f74236bd5d84"
  /**
   * Insight Title: 2022 CH4 emissions by Facility
   * Insight ID: 68c0af10-c72c-4664-84a8-5879a265a90d
   */,
  _2022CH4EmissionsByFacility: "68c0af10-c72c-4664-84a8-5879a265a90d"
  /**
   * Insight Title: 2022 Co2e emissions by Facility
   * Insight ID: 16719c69-6b35-4d45-a8bc-840d381651f7
   */,
  _2022Co2eEmissionsByFacility: "16719c69-6b35-4d45-a8bc-840d381651f7"
  /**
   * Insight Title: 2022 CH4 emissions by Equipment Type
   * Insight ID: 7392819d-0ced-4015-b981-5124d7171b67
   */,
  _2022CH4EmissionsByEquipmentType: "7392819d-0ced-4015-b981-5124d7171b67"
  /**
   * Insight Title: 2022 Co2e emissions by Equipment Type
   * Insight ID: cfe33028-d4e5-4a14-8d7a-a0c38decd834
   */,
  _2022Co2eEmissionsByEquipmentType: "cfe33028-d4e5-4a14-8d7a-a0c38decd834"
  /**
   * Insight Title: 2022 Monthly CH4 emissions by Facility (mt)
   * Insight ID: 4e92676a-b7a2-44c2-83dd-7268f6512002
   */,
  _2022MonthlyCH4EmissionsByFacilityMt: "4e92676a-b7a2-44c2-83dd-7268f6512002"
  /**
   * Insight Title: 2022 Monthly Co2e emissions by Facility (mt)
   * Insight ID: d40ce3c5-3c58-4b44-8967-d2505a73c5ac
   */,
  _2022MonthlyCo2eEmissionsByFacilityMt: "d40ce3c5-3c58-4b44-8967-d2505a73c5ac",
};
export const Dashboards = {
  /**
   * Dashboard Title: Dashboard
   * Dashboard ID: db473747-4444-40c2-91de-5456cee7354b
   */
  Dashboard: "db473747-4444-40c2-91de-5456cee7354b",
};
