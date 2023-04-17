using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Threading;
using Newtonsoft.Json;

namespace Multithreading
{
    internal class Program
    {
        static void Main(string[] args)
        {
            ParameterizedThreadStart pt = new ParameterizedThreadStart(Program.Display);
            Thread T2 = new Thread(pt);
            T2.Start(11);
            ThreadStart ts = new ThreadStart(Program.Display);
            Thread T1 = new Thread(ts);
            Console.WriteLine("Before thread");
            T1.Start();
            T1.Join();
            T2.Join();
            Console.WriteLine("Thread2Function completed");
            for (int i = 1; i <= 10; i++)
            {
                if (T1.IsAlive)
                {
                    Console.WriteLine("Thread1Function is still doing it's work");
                    Thread.Sleep(500);
                }
                else
                {
                    Console.WriteLine("Thread1Function Completed");
                    break;
                }
            }
            Console.WriteLine("Main Thread Completed");
            string json = @"{
              'Email': 'james@example.com',
              'Active': true,
              'CreatedDate': '2013-01-20T00:00:00Z',
              'Roles': [
                'User',
                'Admin'
              ]
            }";
            var test = JsonConvert.DeserializeObject<Account>(json);
            Console.WriteLine(test.Email);
            Console.ReadLine();
        }

        public static void Display()
        {
            Console.WriteLine("Thread1Function started");
            for (int i=0; i< 10;i++) {
                Console.WriteLine("Test "+ i);
            }
            Thread.Sleep(5000);
            Console.WriteLine("Thread1Function is about to return");

        }

        public static void Display(Object k)
        {
            Console.WriteLine("Thread2Function started");
            int n = int.Parse(k.ToString());
            for (int i = 0; i < n; i++)
            {
                Console.WriteLine("Test " + i);
            }

        }
    }
}
