using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClassLibrary1
{
    public class Startup
    {

        public async Task<object> LearnCSV(dynamic input)
        {
            await Task.Delay(1);
            string csv_learn = (string)input.csv_learn;
            string csv_anomaly = (string)input.csv_anomaly;
            string model_type = (string)input.model_type;

            System.Console.WriteLine($"learn csv = {csv_learn}");
            System.Console.WriteLine($"anomaly_csv = {csv_anomaly}");
            System.Console.WriteLine($"model type = {model_type}");

            TimeSeries ts_learn = new TimeSeries(csv_learn);
            TimeSeries ts_anomaly = new TimeSeries(csv_anomaly);
            List<AnomalyReport> l;

            
            if (model_type == "hybrid")
            {
                Console.WriteLine("working on hybrid");
                HybridAnomalyDetector.Reset();
                HybridAnomalyDetector.LearnNormal(ts_learn);
                l = HybridAnomalyDetector.Detect(ts_anomaly);
                Console.WriteLine("done");
            }
            else if (model_type == "regression")
            {
                Console.WriteLine("working on regression");
                RegressionAnomalyDetector.Reset();
                RegressionAnomalyDetector.LearnNormal(ts_learn);
                l = RegressionAnomalyDetector.Detect(ts_anomaly);
                Console.WriteLine("done");
            } else
            {
                Console.WriteLine("wrong model type");
                throw new ArgumentException($"invalid model type `{model_type}` was given");
            }
            Console.WriteLine("returning l");
            return new AnomalyDiffReport(l).detectedTimes;
        }
    }
}
